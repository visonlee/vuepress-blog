## 前端相关知识

vscode 调试vue项目,首先按照这个教程设置 [vs code调试vuejs](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)

但是这个教程有一个问题，就是只能调试`.vue`格式的文件,纯js文件打断点会变成`（unverified breakpoint）`，意思就是你现在打的这个断点和最终生成的代码不能对应起来，所以无法跳到`unverified breakpoint`中。解决办法是在`launch.json`的 `sourceMapPathOverrides` 添加一项配置 `"webpack:///./src/*": "${webRoot}/*"`

* 最终的配置文件为：
```json
"configurations": [
      {
        "type": "chrome",
        "request": "launch",
        "name": "vuejs: chrome",
        "url": "http://localhost:9528",
        "webRoot": "${workspaceFolder}/src",
        "breakOnLoad": true,
        "sourceMapPathOverrides": {
          "webpack:///src/*": "${webRoot}/*",
          "webpack:///./src/*": "${webRoot}/*"
        }
      }
    ]
```