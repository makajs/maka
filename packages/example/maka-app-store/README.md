使用maka.js + antd + echarts + fixed-data-table + font-awesome 实现的应用商店demo，可动态安装应用插件

## 预览
[https://makajs.github.io/maka/maka-app-store/](https://makajs.github.io/maka/maka-app-store/)

## 运行

```bash
$ npm i -g @makajs/cli
$ yarn install
$ yarn start 
```

打开浏览器，http://127.0.0.1:8000, 登录用户名：13334445556 密码:1

## 打包
```bash
$ yarn pkg  //执行成功会 build/pkg 目录下生成打包结果
```
```
|---base
     |---component  //组件
            |---antd
            |---echarts
     |---assets     //图片
     |---i18n       //国际化
     |---style      //公共样式
     |---webapi     //api
     |---devtools   //开发工具
|---sys
    |---login
    |---portal
|---set
    |---person
    |---bom
|---plugin
```

