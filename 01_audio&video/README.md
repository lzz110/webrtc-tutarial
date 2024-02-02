# 音视频设备控制Web应用

这是一个简单的Web应用，用于选择并开启音频和视频设备。它包含两个按钮，分别用于选择和开启音频和视频设备，并将媒体流显示在页面上。

## 安装与运行

确保你的系统上安装了Node.js。如果还没有安装，请访问 [Node.js官网](https://nodejs.org/) 并按照指示进行安装。

## 方法一(需要Visual Studio Code)
在Index.html页面 右键选择 Open With Live Server, 浏览器将自动打开 http://127.0.0.1:5500/01_audio&video/index.html 

## 方法二
### 步骤1: 安装依赖并启动服务器
在项目目录中，运行以下命令来安装所需的依赖。

```bash
npm install & npm start
```

### 步骤2: 访问应用
在浏览器中访问 http://localhost:8080 来查看应用。


### 注意事项
navigator.mediaDevices() API 要求在 HTTPS 或者在localhost上 ，测试运行才能访问摄像头和麦克风。

