
import { actionMixin, fetch, navigate } from 'maka'
import initState from './state'
var eventListeners = {}


@actionMixin('base', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        this.load()
        
        navigate.listen(this.listen)
        
        var local = navigate.getLocation()
        var target
        if(navigate.getLocation().pathname == '/portal'){
            target = '/portal/sys-app-store'
        }
        else{
            target = local.pathname + local.search
        }
        navigate.redirect(target)
    }

    load = async () => {
        var menus = await this.webapi.portal.getMenu()
        var setting = await this.webapi.option.query()
        menus = initState.data.menu.concat(menus)
        this.base.setState({
            'data.menu': menus,
            'data.setting': setting
        })
        console.log(menus)
    }

    getCurrentUser = () => this.base.context.get('currentUser') || {}

    getMenuChildren = () => {
        const menu = this.base.gs('data.menu')

        const loop = (children, level) => {
            const ret = []
            children.forEach(child => {
                let ele = {
                    name: child.appName,
                    key: child.appName
                }

                if (child.isGroup) {
                    ele.component = 'antd.Menu.ItemGroup'
                    ele.title = child.title
                    if (child.children) {
                        ele.children = loop(child.children, level + 1)
                    }
                }
                else {
                    if (!child.children) {
                        ele.component = 'antd.Menu.Item'

                        if (child.icon || level == 1) {
                            ele.children = [{
                                component: 'antd.Icon',
                                type: child.icon || 'desktop',
                                className: 'anticon'
                            }, {
                                name: 'name',
                                component: 'span',
                                children: child.title
                            }]
                        }
                        else {
                            ele.children = child.title
                        }
                    }
                    else {
                        ele.component = 'antd.Menu.SubMenu'
                        ele.children = loop(child.children, level + 1)

                        if (child.icon || level == 1) {
                            ele.title = [{
                                component: 'antd.Icon',
                                className: 'anticon',
                                type: child.icon || 'desktop'
                            }, {
                                component: 'span',
                                children: child.title
                            }]
                        }
                        else {
                            ele.title = child.title
                        }
                    }
                }

                if (!(child.isVisible === false))
                    ret.push(ele)
            })
            return ret
        }
        return {
            _isMeta: true,
            value: loop(menu, 1)
        }

    }

    topMenuClick = async (e) => {
        switch (e.key) {
            case 'logout':
                this.base.context.set('currentUser', undefined)
                fetch.clearAccessToken()
                navigate.redirect('/sign-in')
                break;
            case 'mySetting':
                this.setContent('My setting', 'zlj-my')
                break;
            case 'toggleTabs':
                this.base.ss({ 'data.isTabsStyle': !this.base.gs('data.isTabsStyle') })
        }
    }


    menuClick = (e) => {
        const hit = this.findMenu(this.base.gs('data.menu'), e.key)
        if (hit) {
            this.setContent(hit.name, hit.appName, hit.appProps)
        }
    }

    getMenuSelectKeys = () => {
        const content = this.base.gs('data.content')
        if (!content) return
        var menu = this.findMenu(this.base.gs('data.menu'), content.appName)
        return menu ? [menu.appName] : []
    }

    tabChange = (key) => {
        const openTabs = this.base.gs('data.openTabs')
        const curr = openTabs.find(o => o.appName == key)
        this.setContent(curr.title, curr.appName, curr.appProps)
    }

    tabEdit = async (key, action) => {
        if (action == 'remove') {
            //页签关闭调用app监听方法
            var closeListener = eventListeners[`${key}__close`]
            if(closeListener && !(await closeListener())){
                return 
            }
            var openTabs = this.base.gs('data.openTabs') || []
            var hitIndex = openTabs.findIndex(o => o.appName == key)
            
            openTabs.splice(hitIndex, 1)

            var content = openTabs.length > 0 ? openTabs[openTabs.length - 1] : {}

            //页签激活调用app监听方法
            var activeListener =  eventListeners[`${content.appName}__active`]
            if(activeListener ){
                setTimeout(activeListener, 16)
            }

            var json = {
                'data.openTabs': openTabs,
                'data.content': content
            }
            this.base.setState(json)
        }
    }

    findMenu(menu, appName) {
        const loop = (children) => {
            var ret
            for (var child of children) {
                if (child.appName == appName) {
                    ret = child
                    break
                }

                if (child.children) {
                    ret = loop(child.children)
                    if (ret)
                        break
                }
            }
            return ret
        }
        return loop(menu)
    }

    foldMenu = () => {
        this.base.ss({ 'data.isFoldMenu': !this.base.gs('data.isFoldMenu') })
    }

    setContent = (title, appName, appProps) => {
        if (!appName)
            return

        var data = this.base.getState('data'),
            menu = data.menu,
            openTabs = data.openTabs || [],
            isTabsStyle = data.isTabsStyle,
            oriMenuItem = this.findMenu(menu, appName),
            json = {}

        const currContent = data.content
        if (currContent && appName == currContent.appName)
            return

        title = title || (oriMenuItem && oriMenuItem.title)
        appProps = appProps || (oriMenuItem && oriMenuItem.appProps) || {}

        var content = { title, appName, appProps }

        json['data.content'] = content

        var hitIndex = openTabs.findIndex(o => o.title == title || o.appName == appName)
        var hit = hitIndex != -1

        if (!hit) {
            if (!isTabsStyle)
                openTabs = []
            openTabs.push(content)

            json['data.openTabs'] = openTabs
        }
        else {
            if (isTabsStyle) {
                //页签激活调用app监听方法
                var activeListener =  eventListeners[`${content.appName}__active`]
                if(activeListener ){
                    setTimeout(activeListener, 16)
                }

                json['data.openTabs.' + hitIndex] = content
            }
            else {
                openTabs = []
                openTabs.push(content)
                json['data.openTabs'] = openTabs
            }
        }

        this.base.setState(json)

        setTimeout(() => {
            let location = navigate.getLocation()
            let full = `${location.pathname}${location.search}`
            let segs = full.split('/')
            segs = segs.slice(0, segs.indexOf('portal') + 1)
            segs.push(content.appName)
            navigate.redirect(segs.join('/'))
        }, 0)
    }

    openOption = () => {
        this.base.setState({'data.optionVisible': !this.base.getState('data.optionVisible')})
    }


    addTabCloseListener = (appFullName, handler) => {
        eventListeners[appFullName + '__close'] = handler
    }

    removeTabCloseListener = (appFullName) => {
        if(eventListeners[appFullName + '__close'])
            delete eventListeners[appFullName + '__close']
    }

    addTabActiveListener = (appFullName, handler) => {
        eventListeners[appFullName + '__active'] = handler
    }

    removeTabActiveListener = (appFullName) => {
        if(eventListeners[appFullName + '__active'])
            delete eventListeners[appFullName + '__active']
    }
    
    
    

    listen = (location, action) => {
        let full = `${location.pathname}${location.search}`
        if (!full || full.indexOf('portal') == -1)
            return

        let segs = full.split('/'),
            targetApp = segs[segs.length - 1]

        if (targetApp == 'portal' || !targetApp) {
            this.base.ss({
                'data.openTabs': [],
                'data.content': {}
            })
        }
        else {
            this.setContent('', targetApp)
        }
    }

    componentWillUnmount = () => {
        navigate.unlisten(this.listen)
    }

   
}