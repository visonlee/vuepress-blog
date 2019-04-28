## Virtual Box下centOS 7 Minimal配置网络

网上已经有很多安装centOS的教程了,这里略.

对于新安装的输入centOS 7 Minimal, `ip addr`命令,除了`127.0.0.1`,你会发现缺少其他IP地址。

操作步骤如下:
```bash
cd /etc/sysconfig/network-scripts/ && vi ifcfg-enp0s3
```

在最后一行添加 `ONBOOT=yes`

``` 15
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=dhcp
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=enp0s3
UUID=a880a364-cef3-45c2-8031-046739523a8f
DEVICE=enp0s3
ONBOOT=yes
```

执行`reboot`命令,重启系统.

重启后,重新输入 `ip addr` 命令,如图，看到已经配置了新的ip地址了.
![An image](http://www.jeramysingleton.com/content/images/2015/09/select_network_settings-1.png)

按照图片,点击网络配置, 点击`advanced`, 如图添加一个网络配置 
![An image](http://www.jeramysingleton.com/content/images/2015/09/port_forwarding.png)

[参考链接](http://www.jeramysingleton.com/install-centos-7-minimal-in-virtualbox/)

#### 我使用以下设置：

* 主机IP：127.0.0.1  - 这是主机操作系统（不是VM）的IP地址（本地主机）。
* 如果要从Internet上的任何位置访问VM，则需要使用计算机真实IP。
* 主机端口：2222  - 使用计算机上打开的端口。
* 访客IP  - 这是在VM命令行中键入ip addr时显示的IP地址。 
* 在我的情况下，每次只有一个VM运行时它就是10.0.2.15。
* Guest Port-  22是默认的ssh端口，这就是我们想要在这里使用的。

最后使用ssh登录,在本地机器命令行输入
```bash
ssh -p 2222 root@localhost
```

[完]

