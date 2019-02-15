import React from 'react'
import { render as domRender } from 'react-dom'
import { Provider } from 'react-redux'
import appLoader from '@makajs/app-loader'
import utils from '@makajs/utils'
import metaEngine from '@makajs/meta-engine'

var globalObj = utils.getGlobal()

utils.fetch.config({
    mock: true
})

var store = appLoader.init({
    defaultComponent: metaEngine.defaultComponent,
    defaultAction: metaEngine.defaultAction,
    defaultReducer: metaEngine.defaultReducer,
    componentWrapper: metaEngine.wrapper
})

metaEngine.componentFactory.registerComponent("AppLoader", appLoader.AppLoader)

var Hoc,
    isProduction = process.env.isProduction,
    createElement = React.createElement,
    getComponent = metaEngine.componentFactory.getComponent.bind(metaEngine.componentFactory),
    getAction = metaEngine.actionFactory.getAction.bind(metaEngine.actionFactory),
    asyncGetAction = metaEngine.actionFactory.asyncGetAction.bind(metaEngine.actionFactory),
    registerComponent = metaEngine.componentFactory.registerComponent.bind(metaEngine.componentFactory),
    registerAction = metaEngine.actionFactory.registerAction.bind(metaEngine.actionFactory),
    registerTemplate = metaEngine.templateFactory.registerTemplate.bind(metaEngine.templateFactory),
    removeApp = appLoader.removeApp,
    registerPlugin = appLoader.registerPlugin.bind(appLoader.pluginFactory),
    removePlugin = appLoader.removePlugin.bind(appLoader.pluginFactory),
    actionMixin = metaEngine.actionMixin,
    fetch = utils.fetch,
    navigate = utils.navigate,
    appInstances = metaEngine.appInstances,
    actionFactory = metaEngine.actionFactory,
    componentFactory = metaEngine.componentFactory,
    templateFactory = metaEngine.templateFactory,
    pluginFactory = appLoader.pluginFactory,
    appFactory = appLoader.appFactory,
    context = metaEngine.contextManager



//Initialize maka environment
function init(option) {
    appLoader.init(option)
}

//Configure the metadata engine
function config(option) {
    metaEngine.config(option)
}

//load app
async function load(app) {
    return await appLoader.loadApp(app, isProduction)
}

const createAppElementInternal = (appName, appProps) => props => {
    return (
        <Provider store={store}>
            <appLoader.AppLoader name={appName} {...appProps} {...props}  ></appLoader.AppLoader>
        </Provider>
    )
}
function createAppElement(appName, appProps) {
    var Internal = createAppElementInternal(appName, appProps)
    
    if (Hoc) {
        return (<Hoc><Internal /></Hoc>)
    }
    else {
        return Internal
    }
}

//Set high order component
function setHoc(hoc) {
    Hoc = hoc
}

async function render(appName, targetDomId, disableRoute, props={}) {
    var appNameNoQuery = appName.split('?')[0]
    if (!appLoader.existsApp(appNameNoQuery))
        await appLoader.loadApp(appNameNoQuery, isProduction)

    if (disableRoute) {
        if (Hoc) {
            domRender((
                <Hoc>
                    <Provider store={store}>
                        <appLoader.AppLoader name={appName} {...props} ></appLoader.AppLoader>
                    </Provider>
                </Hoc>
            ), document.getElementById(targetDomId))
        }
        else {
            domRender((
                <Provider store={store}>
                    <appLoader.AppLoader name={appName}  {...props}></appLoader.AppLoader>
                </Provider>
            ), document.getElementById(targetDomId))
        }
        return
    }

    if (Hoc) {
        domRender((
            <Hoc>
                <Provider store={store}>
                    <metaEngine.rootElement appName={appName} {...props}/>
                </Provider>
            </Hoc>
        ), document.getElementById(targetDomId))
    }
    else {
        domRender((
            <Provider store={store}>
                <metaEngine.rootElement appName={appName} {...props}/>
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
    getAction,
    asyncGetAction,
    registerComponent,
    registerAction,
    registerTemplate,
    removeApp,
    registerPlugin,
    removePlugin,
    actionMixin,
    appInstances,
    setHoc,
    fetch,
    navigate,
    createElement,
    createAppElement,
    render,
    appFactory,
    pluginFactory,
    actionFactory,
    componentFactory,
    templateFactory,
    store,
    context,
}

export {
    appLoader,
    utils,
    metaEngine,
    init,
    config,
    load,
    getComponent,
    getAction,
    asyncGetAction,
    registerComponent,
    registerAction,
    registerTemplate,
    removeApp,
    registerPlugin,
    removePlugin,
    actionMixin,
    appInstances,
    setHoc,
    fetch,
    navigate,
    createElement,
    createAppElement,
    render,
    appFactory,
    pluginFactory,
    actionFactory,
    componentFactory,
    templateFactory,
    store,
    context,
}
