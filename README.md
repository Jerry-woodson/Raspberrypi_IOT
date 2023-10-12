# Raspberrypi_IOT
这个仓库用作存储大学生创新创业训练项目的代码。 我们希望开发一个系统来模拟智能家居的功能。 我们使用了树莓派作为我们的开发板。 现在我们正在进行项目的需求分析以及技术栈的设计。
<h2>项目的基本需求</h2>
<br>项目主要分为前端和后端2个部分，同时需要实现前端和后端的通信。
<br>项目需要实现的功能是：
<br>具备扫码计时的功能，用户扫码以后即可开始计时，用户再次扫码，表示已经离开，即停止计时，同时需要上锁
<br>模拟用户可以通过终端实现控制空调、控制灯光强度以及开启关闭监控的功能。控制空调的功能使用温湿度传感器进行模拟，控制灯光强度使用光照传感器进行模拟，同时使用树莓派套件的摄像头模拟监控的功能
<h2>项目的基本逻辑架构</h2>
![image](https://github.com/Jerry-woodson/Raspberrypi_IOT/blob/main/processing.jpg)
<h2>上位机技术实现--微信小程序</h2>
我们使用了微信小程序作为我们的上位机，具有方便、简洁、易于移植的好处。
<br><h3>V1.0(2023.10.12)</h3>
在V1.0版本当中，我们基本实现了两大功能，分别是功能模块和登录模块。
<br>其中功能模块分为温度模块、湿度模块、光照模块和摄像头模块。这些模块又细分成温度显示模块、温度调节模块；湿度显示模块、湿度调节模块；光照显示模块、光照调节模块；打开摄像头模块和关闭摄像头模块。
<br>登录模块可以分为密码登录模块、验证码登录模块以及微信登录模块。
<br>具体的逻辑关系可以参见下图：
<br>![image](https://github.com/Jerry-woodson/Raspberrypi_IOT/blob/main/img-folder/Architecture.jpg)
<h3>V1.0展示Demo</h3>
https://github.com/Jerry-woodson/Raspberrypi_IOT/assets/92074601/fa3f18e2-8f9d-4f19-8537-4da890c698ac
<br>具体代码请参见v1.0的压缩包
<h2>通信技术实现</h2>



<h2>下位机技术实现</h2>
