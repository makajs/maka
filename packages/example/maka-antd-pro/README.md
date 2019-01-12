# DEMO

## 运行

```bash
$ npm i -g @makajs/cli
$ yarn install
$ yarn start 
```

打开浏览器，http://127.0.0.1:8000

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
          |---exception             //异常公共App
          |---iframe                //IFrameApp
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
            |---react-media         //注册react-media组件App
     |---devtools
            |---devtools            //开发工具集成App
            |---devtools-action     //可用行为查看App
            |---devtools-app        //运行态App视图与state查看、编辑App
            |---devtools-component  //可用组件查看App
            |---devtools-mock       //mock数据查看App
            |---devtools-state      //state查看App
            |---devtools-template   //可用模板查看App
            |---devtools-webapi     //可用webapi查看App
     |---account
            |---center
                 |---account-center                 //用户中心App
                 |---account-center-application     //用户中心应用页签App
                 |---account-center-article         //用户中心文章页签App
                 |---account-center-project         //用户中心项目页签App
            |---setting
                 |---account-setting                //个人设置App
                 |---account-setting-base-view      //个人设置-基础设置App
                 |---account-setting-bing-view      //个人设置-绑定设置App
                 |---account-setting-notification-view //个人设置-新消息通知App
                 |---account-setting-security-view  //个人设置-安全设置App
     |---dashboard
            |---dashboard-analysis      //分析页App
            |---dashboard-monitor       //监控页App
            |---dashboard-workplace     //工作台App
     |---form
            |---form-advanced           //高级表单App
            |---form-basic              //基础表单App
            |---form-step               //分步表单App
     |---list
            |---list-basic              //标准列表App
            |---list-card               //卡片列表App
            |---list-query              //查询表格App
            |---list-query-setting      //查询表格设置App
            |---list-search-application //搜索列表-应用App
            |---list-search-article     //搜索列表-文章App
            |---list-search-project     //搜索列表-项目App
     |---profile
            |---profile-advanced        //高级详情页App
            |---profile-basic           //基础详情页App
     |---result
            |---result-fail             //结果页-失败页App
            |---result-success          //结果页-成功页App
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


## App介绍

### image
image App， 用于方法公共图片，并通过registerAction,将图片地址分发个各个应用

#### 如何增加公共image？

1. assets/image/src/img 下增加图片文件
2. index.js import并注册
```js
import logo from './img/logo.png'
...
registerAction('image',{
    logo,
    ...
})
```

#### 如何编译
```bash
yarn build
yarn build --dev
```
#### 其他应用如何使用

```js
//混入image行为
@actionMixin('base', 'image')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

//表达式中使用$image行为
const view = {
    component: 'img',
    src: '{{$image.logo}}'
}

//加载image App
async function beforeRegister(){
    await load(['image'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}
```

### style
style app， 用于存放样式，load这个App网站将启用整体样式

#### 如何修改样式

增加或修改assets/style/src/style目录下文件

#### 如何编译
```bash
yarn build
yarn build --dev
```
#### 其他应用如何使用公共样式

- index.js加载style App
```js
async function beforeRegister(){
    await load(['style'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}
```
### component

component目录下的app，都是用于注册组件的app

#### 如何注册组件
新建antd app,关键代码如下
```js
import { registerComponent } from 'maka'
import * as antd from 'antd/lib'
...
registerComponent('antd', antd)
...

```
#### 其他App如何使用组件

```js
//使用component属性指定控件名
const view = {
    component: 'div',
    children: [{
        component: 'antd.Button',
        children: 'Button'
    }, {
        component: 'antd.Input'
    }, {
        component: 'antd.DatePicker'
    }, {
        component: 'antd.Checkbox'
    }, {
        component: 'antd.DatePicker.MonthPicker',
        disabled: true,
    }]
}

//加载antd App
async function beforeRegister(){
    await load(['antd'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}

```

### template
template app，用于注册公共的模板

#### 如何注册模板

```js
import { registerTemplate } from 'maka'
function hello(option){
    return {
        component: 'div',
        children: 'hello'
    }
}
registerTemplate('tpl', {
    hello
})
```

#### 其他App如何使用模板

```js
//使用component属性指定模板名
const view = {
    component: 'div',
    children: [{
        component: 'tpl.hello',
    }]
}

//加载template App
async function beforeRegister(){
    await load(['template'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}

```


### action
action app,用于公共行为的注册

#### 如何注册行为

```js
import { registerAction } from 'maka'
import moment from 'moment'
...
registerAction('moment', moment, true)

```

#### 其他App如何使用公共行为

```js

//混入moment行为
@actionMixin('base', 'moment')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    btnClick = () => {
       alert(this.moment().format('YYYY-MM-DD'))
    }
}

//表达式中使用$image行为
const view = {
    component: 'button',
    src: '{{$btnClick}}'
}

//加载action App
async function beforeRegister(){
    await load(['action'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}

```

### i18n
i18n, 用于国际化的App

#### 如何增加国际化公共资源

修改i18n/src/resx.js

```js
export default {
    'zh-CN': {
        test: '测试',
        test1: '测试,${param}',
        lang: '语言'
    },
    'en-US': {
        test: 'test',
        test1: 'test,${param}',
        lang: 'language'
    }
}
```

#### 应用如何增加自己的国际化资源

- 应用src目录下增加i18n.js，内容如下

```js
import { asyncGetAction } from 'maka'

const zh_CN = {
    'sign-in': '登录',
    'sign-in.user': '用户',
}

const en_US = {
    'sign-in': 'sign in',
    'sign-in.user': 'User',
}

asyncGetAction('i18n').then(i18n => {
    //注册国际化资源
    i18n.register({
        'zh-CN': zh_CN,
        'en-US': en_US
    })
})
```

- index文件修改

```js

import './i18n' //加载本应用国际化资源

//混入i18n行为
@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

//表达式中使用国际化资源
const view = {
    component: 'div',
    children: [{
        component: 'div',
        children: `{{$i18n('test')}}`
    },{
        component: 'div',
        children: `{{$i18n('sign-in')}}`
    }]
}

//加载国际化app
async function beforeRegister(){
    await load(['i18n'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}
```

### theme

theme目录下，是一些主色调App，用于控制整体色调样式


### dev tools

devtools目录， 是一些开发工具的App，可以查看运行态网站状况
