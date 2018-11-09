# maka

## Introduction

### What is maka?

> 'Maka' comes from the Chinese word '码咖'(mǎkā), which means code guru.

> A front-end framework that you can understand at a glance, simplicity does not mean simple.

![image](https://makajs.org/img/framework.png)

### Why Maka.js
Use maka.js to resolve these problems:
#### 1、 React -- ugly syntax
When using React, the UI is complicated.
You may end up with multiple render functions, or a js statement within a jsx statement.
This results in the fact that the code can not clearly express the UI structure.

```javascript
render1(){
    return <div>1</div>
}
render2(){
    return <div>2</div>
}
render(){
    return (
        <div>
            {this.state.data.status == '1' ? render1() : render2()}
            {this.state.data.list.map((item)=>{
                return (
                    <div>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
```

MakaJs is based on React and can use all React controls. The only difference is to use json to express UI.
From Json's tree structure, we can clearly know what the ui is.

```javascript
{
    component: 'div',
    children:[{
        component:'div',
        children: '1',
        _visible: `{{data.status == '1'}}`
    },{
        component:'div',
        children: '2',
        _visible: `{{data.status != '1'}}`
    },{
        _for: 'item in data.list',
        component: 'div',
        children: '{{item}}'
    }]
}
```

#### 2、Redux -- difficult to learn
Redux is a best implementation of Flux, but it is difficult for beginners to get started.
It proposes concepts such as connect, action, reducer, dispatch, store, middleware, etc.


MakaJs is based on Redux, you can only understand View, Action, State

#### 3、Single page web application(SPA) -- very confusing file structure 
We normally use a technical perspective to classify files, components, actions, reducers, middleware.
Whereas the business developer is usually responsible for developing a module. If the files are scattered everywhere, the maintenance complexity is increased, and developers need to debug to determine if all the code on the website is correct.

```javascript
|---website
    |---package.json
    |---index.js
    |---actions
            |---loginAction.js
            |---portalAction.js
    |---reducers
            |---loginReducer.js
            |---portalReducer.js
    |---components
            |---login.js
            |---portal.js
    |---containers
            |---loginContainer.js
            |---portalContainer.js
```

MakaJs proposes the concept of App, which divides a website into multiple apps with the same development model. Each app can be run independently and debugged, and can be combined with low coupling.

```javascript
|---website
    |---package.json (can use yarn start)
    |---index.js
    |---apps
          |---login
                |---view.js
                |---state.js
                |---action.js
                |---index.js
                |---package.json (can use yarn start)
          |---portal
                |---view.js
                |---state.js
                |---action.js
                |---index.js
                |---package.json (can use yarn start)
```    

#### 4、Effectively accumulate your work results
The past framework has kept us tired and pursuing new technologies, and it is difficult to precipitate achievements at work.

MakaJs provides hub.makajs.org, which allows developers to share every runnable app. This accumulation will enable you to quickly develop a similar UI in the future.


### Installation

``` bash
sudo npm i -g @makajs/cli
```

Dependencies：
- npm 
- yarn
``` bash
sudo npm i -g yarn
```

### Getting Started

> The following example is to create a new maka app 'hello-world', and start the development server(<a href='http://localhost:8000' target='maka dev'>http://localhost:8000</a>)

``` bash
maka app hello-world
cd hello-world
yarn start
```

### Command Line Tool

#### Commands

- maka app
> Create a maka app called 'test'
```bash
maka app test 
```


- maka start
> Start the app webpack dev server, browse <a href='http://localhost:8000' target='maka dev'>http://localhost:8000</a> to view the running results of the maka app.
```bash
maka start 
maka start --dev //Start in dev mode
```


- maka build
> Compile the maka app and generate the compilation result in the 'build' directory.
```bash
maka build 
maka build --dev //Start in dev mode
```


- maka pkg
> Package the maka app, generate the package result in the 'build' directory
```bash
maka pkg
maka pkg --dev //Start in dev mode
```


- maka add
> Add a sub-application will modify the package.json file. When the start or pkg command is executed, the compilation result of the sub-application will be copied under the running directory.
```bash
maka add appName
```


- maka adduser
> Create a user at hub.makajs.org and log in, similar to the npm adduser function
```bash
maka adduser
```


- maka publish
> Publish current maka app to hub.makajs.org, other developers can refer to your published app via 'maka add'. Please use 'maka build', 'maka pkg' to build application resources before publishing.

```bash
maka publish
```


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

- The state object provides data for the maka app
- The storage structure of the internal state of the maka engine is immutable type
- Every change of the state object will notify view and rerender


### Action
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

- The Action object contains functions that are provided to the view.
- The 'actionMixin' means the Action object mix up with external Action. The 'base' is required.
- Please refer Advanced Concepts for more information.


### View

``` js

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

- The View object is JSON representation of react components.
- Please refer Advanced Concepts for more information.


## Advanced Concepts

### Expression


- Bind the data that path is 'data.content' in state.
```js
{
    ...
    value: `{{data.content}}`  //value = state.data.content
    ...
}
```

- Bind the function 'onChange' in the Action.
```js
{
    ...
    onChange:`{{$onChange}}` // onChange = action.$onChange
    ...
}

```

- Bind the anonymous function
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

### View reserved keywords


```javascript
{
    component: 'div',
    children: 'hello',
    _visible: 'true',
    _for: 'item in data.list',
    _function: '(a,b)'
}
```

 - The reserved keywords: component, children, _visible, _for, _function

 - In addition to the reserved keywords, you can set any properties supported by the component.

 #### Props

- component

Component name, all html elements are available by default

```javascript
{ component: 'div' } //<div></div>
```
- children

Child component

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

visible: the value can use expression, default value is true

```javascript
{
    component: 'div',
    _visible: false
}

```
*If _visible is set to false, the component will not be created.*

- _for

For loop, support multi-level for loop

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

Function that is used when a component's property requires a function and returns a react element

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

### Custom components


*The View object can use custom components or external react components, see the example below.*

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

### Custom template components

*Define some of the json fragments in the view object that are highly similar and frequently used as template components. When using this, the amount of code in the view object can be effectively reduced. See the example below.*

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


### ActionMixin

*The 'actionMixin' means the Action object mix up with external Action. The 'base' is required.*

- What functions are available from the base of the maka engine?

Function Name | Description | Example in Action | Example in View
--- | -- | --- | ---
getState  | get value in the state by path | this.base.getState('data.input') | $base.getState('data.input')
setState  | set value in the state by path | this.base.setState({'data.input', 'hello'}) | $base.setState({'data.input', 'hello'})
gs | =getState |  this.base.gs('data.input') | $base.gs('data.input')
ss | =setState | this.base.ss({'data.input', 'hello'}) |$base.ss({'data.input', 'hello'})

- To mix in custom action classes

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



## App && Hub

### App


*The maka app can be run, debugged, shared, or combined into a website by weak coupling.*


- Create a app
  - The 'maka app test' command will create a maka app called 'test'

- Add a sub-application
  - The 'maka add' command downloads the app from hub.makajs.org, similar to 'yarn add'.
  - The 'subAppDir' attribute in package.json points to the storage directory of the maka application.
  - Copy app.js and app.css to the distribution directory.
  
- Load a sub-application through the 'AppLoader' component

```javascript
const view = {
    component: 'div',
    className: 'hello',
    children: [{
        component: 'AppLoader',//AppLoader component provided by maka engine
        appName: 'app-test', //app name
        content: 'hello' //app supported properties
    }]
}
```

- Load a sub-application through the 'createAppElement' function
```javascript
import {createAppElement} from 'maka'
...
@actionMixin('base')
class action {
...
var subApp = createAppElement('appName', {content: 'hello'}) //The first parameter: app name, the second parameter: app props
...
}
```

- Preloading a sub-application
change index.html
```javascript
 maka.load(['appName1', 'appName2']).then(()=>{
     ...
 }
```

- Navigate to a sub-application

```javascript
import {navigate} from 'maka'

navigate.redirect('/appName/')
```

### Hub

- Developers can upload the maka application to the hub.makajs.org website
- You can share your app via 'maka publish'. Before using publish, please use 'maka build', 'maka build --dev', 'maka pkg' to build application resources.


## Maka API
```javascript 
import {registerComponent, registerAction} from 'maka'
```
*As the example above, registerComponent and reigsterAction are two apis. All of the supported apis are as the followings:*

api | arguments |  description | 
--- | -- | -- | 
registerComponent | (key, component)  | register customer component
registerAction | (key, action) | register customer action
registerTemplate | (key, template) | register template component
getComponent | (key) | get component by name
load | [appName...] | load app
createAppElement | (appName, appProps) | create app React Element
setHoc | （hoc） | Set the outermost high-level React Element
fetch | Object type, no arguments required  | Provide a fetch object, you can call the background interface, or mock
navigate | Object type, no arguments required | Provide navigate object
render | (appName, targetHtmlElementName) | render


## Ajax && Mock

### Ajax

*You can use the 'fetch' object that provided by the maka engine to implement the ajax call. The followings is an example:*

*action.js*
```javascript
import {fetch} from 'maka'

...
fetch.post('/v1/login',{user: 'admin', password: '123'})
...
```

*index.html, config the fetch object*
```javascript
    window.main = function (maka) {
        maka.utils.fetch.config({
            mock: false, //default value is 'true'
            token: '', 
            after: function (response, url) {
                return response
            }
        })
    }
```

*package.json, configuring local debug webpack dev server proxy*
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

### Mock

*The maka engine provides a 'fetch' object for implementing the mock mechanism. The followings is an example:*

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
        return { result: false, error: { message: 'Please enter the correct username and password.(default user:13334445556,password:1)' } }
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
## Navigate


- redirect

```javascript
import {navigate} from 'maka'
...
navigate.redirect('/portal') //https://www.***.com/#/portal
...
```

- goBack

```javascript
import {navigate} from 'maka'
...
navigate.redirect('/sign-in') //https://www.***.com/#/sign-in
...
navigate.redirect('/portal') //https://www.***.com/#/portal
...
navigate.goBack() //https://www.***.com/#/sign-in
```

- listen event
```javascript
navigate.listen((location.action)=>{
    debugger
    //code
})
```

## Team

- ziaochina   <ziaochina@gmail.com>
- LI Shengguo  <lishengguo@qq.com>
- Jeffy Cai   <caixiaobing@live.cn>

## Done

Thank you for your interest in maka!

