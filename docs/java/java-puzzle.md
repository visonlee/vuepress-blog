## java学习过程中遇到的问题

*	mockito - Most popular Mocking framework for unit tests written in Java http://mockito.org
*	《dependency injection》 dhanji r. prasanna 
*	Java Proxy & InvocationHandler
*	spring profile 用来配置"测试","QA","生产"环境,可以通过XML文件配置也可以用java类配置
*	java的CGLIB和动态代理
*	SpringMVC 测试 mockMVC
*	javac -d 带打包编译
*	Spring 事件
*	mysql 存储过程
*	事务 以及 spring的事务管理
* java aop以及spring中的aop
* ThreadLocal
* finalizer 和 cleaner
* 幻象引用是什么意思
* copy-on-write什么意思
* hashmap & currentHashMap
* [java集合框架](http://www.cnblogs.com/skywang12345/p/3323085.html)
* unicast address multicast address broadcast address 是什么以及区别

* 下面的portNum为什么不可以修改
```java
public static void main(String[] args) {
    int portNum = 1337;
    Runnable r = () -> System.out.println(portNum);
    r.run();
    
    portNum = 2345; //这里为什么不可以修改
}
```

* [web.xml中url-pattern中的/和/*的区别](https://stackoverflow.com/questions/4140448/difference-between-and-in-servlet-mapping-url-pattern)
* A/B测试  幂等性

* cas lock-free

* jdk动态代理原理 以及自己模拟jdk动态代理

* mybatis一次执行多条SQL语句的话,数据库连接语句需要添加 :&allowMultiQueries=true

* java 的permgen (Permanent Generation) 是什么	

* java Intrinsic 是什么

* java9 StringConcatFactory

* finalize 干嘛用的，System.gc();啥玩意

* java集合框架需要学习,包括源码

* CPU mesi协议

* java atomic 包 & AtomicLong和LongAdder有什么区别

* java volatile关键字不是很懂,在java并发编程实战p47有描述,加深理解请看马士兵的视频

* 为什么wait notify 要加synchronized关键字,为什么wai要放在while条件内

* ScheduledThreadPoolExecutor与Timer有什么区别,为什么推荐使用前者,前者有什么优点

* 数据库事务的四大特性以及事务的隔离级别的理解,以及它在JDBC中的配置
* PBKDF2WithHmacSHA1是什么来算法来的
* 为什么阿里巴巴禁止把SimpleDateFormat定义为static类型的,以及为什么不是线程安全的?
