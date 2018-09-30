import React from 'react'
import { render as domRender } from 'react-dom'
import { Provider } from 'react-redux'
import appLoader from '@makajs/app-loader'
import utils from '@makajs/utils'
import metaEngine from '@makajs/meta-engine'

//默认配置fetch
utils.fetch.config({
    mock: true
})

appLoader.init({
    defaultComponent: metaEngine.defaultComponent,
    defaultAction: metaEngine.defaultAction,
    defaultReducer: metaEngine.defaultReducer
})

metaEngine.componentFactory.registerComponent("AppLoader", appLoader.AppLoader)

var Hoc,
    isProduction = process.env.isProduction,
    createElement = React.createElement,
    getComponent =  metaEngine.componentFactory.getComponent.bind(metaEngine.componentFactory),
    registerComponent = metaEngine.componentFactory.registerComponent.bind(metaEngine.componentFactory),
    registerAction = metaEngine.actionFactory.registerAction.bind(metaEngine.actionFactory),
    registerTemplate = metaEngine.templateFactory.registerTemplate.bind(metaEngine.templateFactory),
    actionMixin = metaEngine.actionMixin,
    fetch = utils.fetch,
    history = utils.history


//初始化Maka环境
function init(option) {
    appLoader.init(option)
}

//配置元数据引擎
function config(option) {
    metaEngine.config(option)
}

//加载app
async function load(app) {
    return await appLoader.loadApp(app, isProduction)
}

//设置高阶组件
function setHoc(hoc) {
    Hoc = hoc
}

async function render(appName, targetDomId) {
    if (!appLoader.existsApp(appName))
        await appLoader.loadApp(appName, isProduction)

    if (Hoc) {
        domRender((
            <Hoc>
                <Provider store={window.__maka_store__}>
                    <appLoader.AppLoader name={appName} />
                </Provider>
            </Hoc>
        ), document.getElementById(targetDomId))
    }
    else {
        domRender((
            <Provider store={window.__maka_store__}>
                <appLoader.AppLoader name={appName} />
            </Provider>
        ), document.getElementById(targetDomId))
    }
}

export default {
    appLoader,
    utils,
    metaEngine,
    init,
    config,
    load,
    getComponent,
    registerComponent,
    registerAction,
    registerTemplate,
    actionMixin,
    setHoc,
    fetch,
    history,
    createElement,
    render
}

export {
    appLoader,
    utils,
    metaEngine,
    init,
    config,
    load,
    getComponent,
    registerComponent,
    registerAction,
    registerTemplate,
    actionMixin,
    setHoc,
    fetch,
    history,
    createElement,
    render
}
