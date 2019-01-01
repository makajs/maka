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

## 代码结构
```
|---assets
     |---i18n                       //国际化支持App
     |---image                      //公共图片注册App
     |---style                      //公共样式注册App
|---base
     |---action                     //公共行为注册App
     |---common                     //公共App
     |---component                  //组件
            |---antd                //antd组件注册 App
            |---code-mirror         //代码编辑组件注册App
            |---custom-component    //注册自定义组件App
            |---echarts             //注册echarts组件App
            |---fixed-data-table    //注册fixed-data-table App
            |---font-awesome        //注册awesome字体组件App
            |---json-viewer         //注册json viewer组件App
            |---markdown            //注册markdown组件App
            |---react-container-query //注册react-container-query组件App
     |---devtools
            |---devtools            //开发工具集成App
            |---devtools-action     //可用行为查看App
            |---devtools-app        //运行态App视图与state查看、编辑App
            |---devtools-component  //可用组件查看App
            |---devtools-mock       //mock数据查看App
            |---devtools-state      //state查看App
            |---devtools-template   //可用模板查看App
            |---devtools-webapi     //可用webapi查看App
     |---plugin
            |---set-person-list-plugin  //员工列表App 插件
     |---set
            |---bom
                 |---set-bom            //bom单据App
                 |---set-bom-list       //bom列表App
            |---customer
                 |---set-customer       //客户卡片App
                 |---set-customer-group //客户分类卡片App
                 |---set-customer-list  //客户列表App
            |---person
                 |---set-person         //人员卡片App
                 |---set-person-list    //人员列表App
     |---sys
            |---app-store               //应用商店App
            |---dashboard               
                 |---dashboard                      //仪表盘集成App
                 |---dashboard-hot-search           //仪表盘-热搜App
                 |---dashboard-market               //仪表盘-运营活动效果App
                 |---dashboard-sale                 //仪表盘-总销售额App
                 |---dashboard-sale-proportion      //仪表盘-销售额饼图App
                 |---dashboard-sale-trend           //仪表盘-总销售额趋势App
                 |---dashboard-trade                //仪表盘-支付笔数App
                 |---dashboard-visit                //仪表盘-总访问量App
            |---home                    
                 |---home               //首页App
                 |---home-chart         //首页-图表App
                 |---home-shortcut      //首页-快捷方式App
                 |---home-todo          //首页-代办App
            |---option                  //设置App
            |---portal                  //门户App
            |---sign-in                 //注册App
     |---theme
            |---parimary-color
                 |---theme-primairy-color-blue      //蓝色主色调App
                 |---theme-primairy-color-green     //绿色主色调App
                 |---theme-primairy-color-red       //红色主色调App
     |---webapi                                     //webapi注册App
```

