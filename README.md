# maka

-  maka源于中文码咖，意为写代码的大咖
- 一眼即可看懂的前端框架，简约而不简单


## 1、安装

``` bash
sudo npm i -g @makajs/cli
```

依赖项：
- npm 
- yarn
``` bash
sudo npm i -g yarn
```

## 2、快速上手

``` bash
maka app helloworld
cd helloworld
yarn start
```
*创建一个名叫helloworld的应用,并且运行起来*


## 3、入门概念

### 3.1、State

``` js
const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}
```

- state很简单，可以理解为是应用的数据部分
- 引擎内部状态的存储机构是immutable
- 每次状态变化会通知view,重新render


### 3.2、Action

``` js
@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }
}
```

- action很简单，可以理解为是一些提供给ui调用的函数
- actionMixin，混入外部action,默认混入了maka引擎base
- 详细参见后面高级概念


### 3.3、View

``` js
const view = {
    component: 'div',
    className: 'hello',
    children: [{
        component: 'div',
        children: '{{data.content + data.input}}'
    }, {
        component: 'input',
        placeholder: 'world',
        value: '{{data.input}}',
        onChange: '{{$onChange}}'
    }]
}
```

- view很简单，可以理解为react的json表示
- component是react组件名
- 详细参见后面高级概念

## 4、高级概念

### 4.1、表达式

*表达式可以支持非常复杂的形式，见下面示例*

- A、绑定state中path为data.content的数据
```js
{
    ...
    value: `{{data.content}}`
    ...
}
```

- B、绑定action中方法名为onChange的函数
```js
{
    ...
    onChange:`{{$onChange}}`
    ...
}

```

- C、复杂的
```js
{
    onChange: `{{{
        debugger;
        return (e)=>$base.setState({'data.input',e.target.value)})
    }}}`
}
```

### 4.2、view节有哪些系统属性

```javascript
{
    component: 'div',
    children: '{{data.list[_rowIndex].name}}',
    _visible: true,
    _notRender: false,
    _power: 'for in data.list'
}
```

- _visible
是否显示，值支持表达式,默认true

- notRender
是否render, 值支持表达式,默认false，只有使用AppLoader组件时有效，和_visible的区别是notRender能保留app状态

- _power
超能力，支持两种语法
    -  for in [state path]
    将元素节点根据状态转为为数组
    - (rowIndex)=>rowIndex
    将元素节点转化为函数


### 4.3、ActionMixin

*ActionMixin提供了低耦合方式混入外部行为的可能，缺省并至少需要混入了Maka框架的base行为*


- A、base 提供了哪些可用行为？

方法名 | 描述 | action中使用示例 | view中使用示例
--- | -- | --- | ---
getState  | 获取状态 | this.base.getState('data.input') | $base.getState('data.input')
setState  | 设置状态 | this.base.setState({'data.input', 'hello'}) | $base.setState({'data.input', 'hello'})

- B、如何混入自定义的行为类？

```javascript
import { actionMixin, registerAction } from 'maka'

class customAction {
    fun1 = () => {
        alert()
    }
}

registerAction('customAction', customAction)

@actionMixin('base', 'customAction')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    onClick: '{{$customAction.fun1}}'
}
```


### 4.4、如何使用自定义组件?

*view可以使用自定义组件或者外部的react组件，见下面示例*

```javascript
import React from 'react'
import { registerComponent } from 'maka'

class CustomComponent extends React.PureComponent {
    render() {
        return (<div>custom component</div>)
    }
}

registerComponent('CustomComponent', CustomComponent)

const view = {
    component: 'CustomComponent'
}
```

### 4.5、如何自定义模板组件？
*模板组件是为了减少view json的代码量提出的概念，把相似度很高、并且经常使用的一些json定义为模板组件，在使用中能有效减少代码量，见下面示例*

```javascript
import { registerTemplate } from 'maka'

const customTemplate = function(props) {
    return {
        component: 'div',
        children: [{
                component: 'div',
                children: props.content
            },{
                component: 'div',
                children: props.content
            }
        ]
    }
}

registerTemplate( 'customTemplate', customTemplate)

const view = {
    component: 'customTemplate'，
    content: 'hello'
}

```

### 4.6、如何调用外部App

*把一个大型网站拆分成许多开发模式相同的app，这些app又可以独立运行、调试、分享，通过弱耦合的方式又能组合在一起成为一个网站*

```javascript
const view = {
    component: 'div',
    className: 'hello',
    children: [{
        component: 'AppLoader',
        appName: 'app-test' 
    }]
}
```
- 上面示例中app-test是一个独立app
- 它可能来源与package.json中subAppDir指向目录下存在的应用，也可能是通过maka add 引入的外部应用
- 所使用的子应用需要执行maka build 和 maka build --dev生成相应的js和css
- yarn start 会自动将应用子应用资源copy 到dist目录下,yarn pkg也是相同道理

## 5、maka Api

```javascript 
import {registerComponent, registerAction} from 'maka'
```

api | 参数 |  描述 | 
--- | -- | -- | 
registerComponent | (key, component)  | 注册组件
registerAction | (key, action) | 注册行为
registerTemplate | (key, template) | 注册模板
getComponent | (key) | 通过组件名获取组件
load | [应用名...] | 加载应用
setHoc | （hoc） | 设置最外层高阶组件
fetch |  | 提供fetch对象，可以调用后台接口，或者mock
navigate | | 提供navigate对象
render | (appName, targetHtmlElementName) | render

## 6、如何调用webapi或者mock？

### 6.1、调用webapi

*action.js*
```javascript
import {fetch} from 'maka'

...
fetch.post('/v1/login',{user: 'admin', password: '123'})
...
```

*index.html*
```javascript
    window.main = function (maka) {
        maka.utils.fetch.config({
            mock: false,
            token: '',
            after: function (response, url) {
                return response
            }
        })
    }
```

*package.json*
```javascript
...
"server": {
    "proxy": {
        "/v1/*": {
            "target": "http://www.***.com:8080/"
        }
    },
    "port": 8000
  }
...
```

### 6.2、使用纯前端mock

*action.js*
```javascript
import {fetch} from 'maka'

...
fetch.post('/v1/login',{user: 'admin', password: '123'})
...
```


*mock.js*
```javascript
import { fetch } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.users) {
         mockData.users = [{
            id: 1,
            account: 13334445556,
            password: 'c4ca4238a0b923820dcc509a6f75849b',
            name: 'zlj'
        }]
    }
}

fetch.mock('/v1/login', (option, headers) => {
    initMockData()
    const user = mockData.users.find(o => o.account == option.account && o.password == option.password)
    if (user) {
        return {
            result: true,
            token: `${user.id},${user.account},${user.password},${user.name ? user.name : ''}`,
            value: option
        }
    }
    else {
        return { result: false, error: { message: '请输入正确的用户名密码（系统内置用户user:13334445556,pwd:1）' } }
    }
})
```

*index.js*
```javascript
import 'mock.js'
```

*index.html*
```javascript
window.main = function (maka) {
    maka.utils.fetch.config({
        mock: true
    })
}
```


## 6、如何使单页网站具备类似router的能力？

### 6.1、redirect

```javascript
import {navigate} from 'maka'
navigate.redirect('/portal') //https://www.***.com/#/portal
```

### 6.2、goBack

```javascript
import {navigate} from 'maka'
...
navigate.redirect('/sign-in') //https://www.***.com/#/sign-in
...
navigate.redirect('/portal') //https://www.***.com/#/portal
...
navigate.goBack() //https://www.***.com/#/sign-in
```

### 6.3、listen 
```javascript
navigate.listen((location.action)=>{
    debugger
    //自定义处理
})
```


## 7、maka cli 命令

命令 | 描述
--- | -- 
maka app  | 创建一个应用
maka start | 启动app，支持--dev参数
maka build | 编译应用,支持--dev参数
maka pkg | 打包应用，支持--dev参数
maka add | 增加依赖应用, 类似yarn add
maka publish | 发布应用, 类似yarn publish
maka install | 安装依赖，类似yarn install
maka upgrade | 更新依赖，类似yarn upgrade
maka remove | 移除依赖, 类似yarn remove


## 7、结束

- 感谢您对maka的关注！

