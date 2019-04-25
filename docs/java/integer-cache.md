## java的IntegerCache

在网上看到一道java面试题,挺有意思的,题目如下:

#### 下面代码输出结果是什么,为什么?
```java
public class Test {
	public static void main(String[] args) throws InterruptedException {
       Integer f1 = 100, f2= 100, f3 = 150,f4 =150;
        System.out.println(f1 == f2);
        System.out.println(f3 == f4);
    }
}
```
其中 `f1 == f2` 的值为`true`, `f3 == f4` 的值为`false`.

网上已经有很多关于答案的解释了,但是感觉并不完整。要解开答案,首先我们执行如下命令,看看底层做了什么操作.

```bash
javac Test.java && javap -verbose Test
```
其中生成class文件的结构如下(只摘录了重要部门):

```
0: bipush        100
2: invokestatic  #2    // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
5: astore_1
6: bipush        100
8: invokestatic  #2   // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
11: astore_2
12: sipush        150
15: invokestatic  #2  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
18: astore_3
19: sipush        150
22: invokestatic  #2  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
```

可以看到,类型为`Integer`的`f1,f2,f3,f4`变量底层都通过[自动装箱(Autoboxing)](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)都调用了`Integer.valueOf`方法.

下面我们再看看`Integer.valueOf`的源码

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

判断i是否在IntegerCache的low和high范围内,如果是直接返回IntegerCache.cache的值,否则new新的对象。
`IntegerCache`是`Integer`的静态内部类,然后我们再看看它干了什么

```java
private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static final Integer cache[];

    static {
        //😀😀😀 通过这段代码不难发现,默认情况下, low和high的值分别落在[-128, 127]之间
        // high value may be configured by property
        int h = 127;
        String integerCacheHighPropValue =
            sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
        if (integerCacheHighPropValue != null) {
            try {
                int i = parseInt(integerCacheHighPropValue);
                i = Math.max(i, 127);
                // Maximum array size is Integer.MAX_VALUE
                h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
            } catch( NumberFormatException nfe) {
                // If the property cannot be parsed into an int, ignore it.
            }
        }
        high = h;

        cache = new Integer[(high - low) + 1];
        int j = low;
        for(int k = 0; k < cache.length; k++)
            cache[k] = new Integer(j++);

        // range [-128, 127] must be interned (JLS7 5.1.7)
        assert IntegerCache.high >= 127;
    }

    private IntegerCache() {}
}
```
:::tip 提示
java中`==`比较时,是对象类型的话,比较他们的内存地址是否一样, 而[基本类型](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html),如`int`,`long`等,则比较他们的值是否一样
:::

`-128 < 100 < 127`,所以当执行 `Integer f1 = 100`, 会从缓存中取,他们当然一样

而`Integer f3 = 150;`,则是`new`一个新的对象,所以用`==`比较会返回 `false`

【完】