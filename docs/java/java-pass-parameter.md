## java为什么参数传递都是值传递

跟这段C代码原理一样,都是值传递。在C++中,引用是变量的别名, 所以引用传参操作是直接操作对象。

而下面这两段代码,C代码中,在栈中分配一个指针变量, p, 指针P指向了a的内存地址。调用show方法的时候, 实参指针变量会拷贝一个副本传到形参中,也就是show方法里面的 a指针变量,a跟形参p指向的内存地址一样,都是指向了例子中main方法的a变量的地址。所以他们都能操作变量a的内容。
而在show方法中,改变了a指针指向的地址(a = &b),仅仅是改变了副本的指向,所以现在对它重新复制(*a = 34567;)，并不影响main函数原来变量的值。java代码的例子也类似

### C代码

```c
void show(int *a) {
    int b = 222;
    a = &b;
   *a = 34567;
   printf("%d\n",*a);
}

int main(int argc, const char * argv[]) {
    int a = 2345;
    int *p = &a;
    printf("%d\n",*p);
    show(p);

    printf("%d\n",*p);
    return 0;
}
```

*  C代码输出结果

```
2345
34567
2345
```

### Java代码

```java
   public static void show(A a) {
        a = new A();
        a.i++;
        a.name = "哈哈";

        System.out.println(a.i);
        System.out.println(a.name);
    }

    public static void main(String args[]) {
        A a = new A();
        show(a);

        System.out.println("++++++++++++++++++分割线++++++++++++++++++");
        System.out.println(a.i);
        System.out.println(a.name);
    }

class A {
    int i = 0;
    String name = "hello";
}
```

*  java代码输出结果

```
1
哈哈
++++++++++++++++++分割线++++++++++++++++++
0
hello
```