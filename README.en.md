# maka

-  maka源于中文码咖，意为写代码的大咖
- 一眼即可看懂的前端框架，简约而不简单


## Installation

``` bash
sudo npm i -g @makajs/cli
```

Dependencies：
- npm 
- yarn
``` bash
sudo npm i -g yarn
```

## Getting Started

``` bash
maka app helloworld
cd helloworld
yarn start
```
*To Create a new Maka app 'helloworld', and starts the development server.*


## Main Concepts

### State

``` js
const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}
```

- The state is the data of a Maka app
- The storage mechanism of the Maka engine base state is Immutable
- Every change of state will notify view and re render.


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

- The Actions are functions that are provided to the View
- The ActionMixin, blending with external Action. In the action above is mixed with Maka engine base.
- See the Advanced Concepts


### View

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

- The View is JSON representation of react components 
- See the Advanced Concepts

## Advanced Concepts

### View Expression


- A.Bind the data that path is 'data.content' in state.
```js
{
    ...
    value: `{{data.content}}`   //value = state.data.content
    ...
}
```

- B.Bind the function 'onChange' in the Action.
```js
{
    ...
    onChange:`{{$onChange}}`   //onChange = action.$onChange
    ...
}

```

- C.Bind the anonymous function
```js
{
    onChange: `{{{
        debugger;
        return $onChange
    }}}`

    /* 
    onChange = new Function(`{
        debugger;
        return action.onChange
    }`)() 
    */
}

```


### 4.2、ActionMixin

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


### 4.3、如何使用自定义组件?

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

### 4.4、如何自定义模板组件？
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

### 4.5、如何调用外部App

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

api | 参数 |  描述 | 
--- | -- | -- | 
registerComponent | (key, component)  | 注册组件
registerAction | (key, action) | 注册行为
registerTemplate | (key, template) | 注册模板
getComponent | (key) | 通过组件名获取组件
load | [应用名...] | 加载应用
setHoc | （hoc） | 设置最外层高阶组件
fetch |  | 提供fetch对象，可以调用后台接口，或者mock
render | (appName, targetHtmlElementName) | render

## 6、maka cli 命令

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

