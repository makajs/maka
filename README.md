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

*表达式可以支持js语法，见下面示例*

- 绑定state中path为data.content的数据
```js
{
    ...
    value: `{{data.content}}`  //value = state.data.content
    ...
}
```

- 绑定action中方法名为onChange的函数
```js
{
    ...
    onChange:`{{$onChange}}` // onChange = action.$onChange
    ...
}

```

- 函数体
```js
{
    onChange: `{{{
        debugger;
        return $onChange
    }}}`

    /* 
    onChange = new Function(`
        debugger;
        return action.onChange
    `)() 
    */
}
```

### 4.2、view节有哪些系统属性?


```javascript
{
    component: 'div',
    children: 'hello',
    _visible: 'true'
}
```

 这里说的系统属性就是上面例子中的component、children、_visible等;
 除系统属性外还可以设置控件支持的任何属性;
 主要支持下面描述的几种系统属性;

- component
组件名，缺省可使用所有html元素
```javascript
{ component: 'div' } //<div></div>
```
- children
子组件
```javascript
{
    component: 'div'
    children: {
        component: 'div',
        children: 'children'
    }
}

/*
<div>
    <div>chidlren</div>
</div>
*/
```

- _visible
是否显示，值支持表达式, 默认true

```javascript
{
    component: 'div',
    _visible: false
}

```
*_visible设置为false,将不创建该组件*

- _for
循环,支持for嵌套

```javascript
const state = {
    data: {
        list: [{a:1}, {a:2}, {a:3}]
    }
}

const view = {
    component: 'div',
    children: {
        _for: 'item in data.list', // or (item,index) in data.list
        component: 'div',
        children: '{{item.a}}'
    }
}
```

- _function
函数,当组件的某个属性要求是一个函数并返回react 元素时使用它

```javascript

import {registerComponent} from 'maka'

class CustomComponent extends React.PureComponent {
    render(){
        var {getSub}  = this.props
        return (
            <div>
                {getSub('aaa','bbb')}
            </div>
        )
    }
}

registerComponent('CustomComponent', CustomComponent)

const view = {
    component: 'div',
    children: {
        component: 'CustomComponet'
        getSub: {
            _function: '(a,b)',
            component: 'div',
            children: '{{a+b}}'
        }
    }
}

```

### 4.3、如何使用自定义组件?

*view可以使用自定义组件或者外部的react组件，见下面示例*

```javascript
import React from 'react'
import { registerComponent } from 'maka'
import { Button } from 'antd'

class CustomComponent extends React.PureComponent {
    render() {
        return (<div>custom component</div>)
    }
}

registerComponent('CustomComponent', CustomComponent)
registerComponent('antd.Button', Button)

const view = {
    component: 'div',
    children: [{
        component: 'CustomComponent'
    },{
        component: 'antd.Button',
        children: 'Button'
    }]
}
```


### 4.4、如何自定义模板组件？
*模板组件是为了减少view json的代码量提出的概念，把相似度很高、并且经常使用的一些json定义为模板组件，在使用中能有效减少代码量，见下面示例*

```javascript
import { registerTemplate } from 'maka'

const CustomTemplate = function(props) {
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

registerTemplate( 'CustomTemplate', customTemplate)

const view = {
    component: 'CustomTemplate'，
    content: 'hello'
}

```


### 4.5、ActionMixin

*ActionMixin提供了低耦合方式混入外部行为的可能，缺省并至少需要混入了Maka框架的base行为*


- maka引擎混入的base提供了哪些可用行为？

方法名 | 描述 | action中使用示例 | view中使用示例
--- | -- | --- | ---
getState  | 获取状态 | this.base.getState('data.input') | $base.getState('data.input')
setState  | 设置状态 | this.base.setState({'data.input', 'hello'}) | $base.setState({'data.input', 'hello'})
gs | =getState |  this.base.gs('data.input') | $base.gs('data.input')
ss | =setState | this.base.ss({'data.input', 'hello'}) |$base.ss({'data.input', 'hello'})
context | 上下文,支持get、set方法 | this.base.context.get('currentUser') or this.base.context.set('currentUser', {name: 'zhang'}) | $base.context.get('currentUser')

- 如何混入自定义的行为类？

```javascript
import { actionMixin, registerAction } from 'maka'

class CustomAction {
    alert = () => {
        alert()
    }
}

registerAction('CustomAction', CustomAction)

@actionMixin('base', 'CustomAction')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    onClick: '{{$CustomAction.alert}}'
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

