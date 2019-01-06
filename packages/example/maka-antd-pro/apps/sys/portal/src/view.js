const styles = {
    content: 'portal-content',
    header: {
        header: 'antd-pro-components-global-header-index-header',
        logo: 'antd-pro-components-global-header-index-logo',
        menu: 'antd-pro-components-global-header-index-menu',
        trigger: 'antd-pro-components-global-header-index-trigger',
        right: 'antd-pro-components-global-header-index-right',
        action: 'antd-pro-components-global-header-index-action',
        search: 'antd-pro-components-global-header-index-search',
        account: 'antd-pro-components-global-header-index-account',
        avatar: 'antd-pro-components-global-header-index-avatar',
        dark: 'antd-pro-components-global-header-index-dark',
        name: 'antd-pro-components-global-header-index-name',
        dropdown: {
            container: 'antd-pro-components-header-dropdown-index-container'
        }
    },
    sider: {
        sider: 'antd-pro-components-sider-menu-index-sider',
        light: 'antd-pro-components-sider-menu-index-light',
        logo: 'antd-pro-components-sider-menu-index-logo',
        icon: 'antd-pro-components-sider-menu-index-icon',
        fixSiderbar: 'antd-pro-components-sider-menu-index-fixSiderbar'
    },
    lang: {
        dropDown: 'antd-pro-components-select-lang-index-dropDown',
        menu: 'antd-pro-components-select-lang-index-menu',
    }
}

const user = {
    component: 'antd.Dropdown',
    overlayClassName: styles.header.dropdown.container,
    overlay: {
        component: 'antd.Menu',
        className: 'portal-menu',
        selectedKeys: [],
        onClick: '{{$topMenuClick}}',
        children: [{
            component: 'antd.Menu.Item',
            key: 'userCenter',
            children: [{
                component: 'antd.Icon',
                type: 'user'
            }, `{{$i18n('menu.account.center')}}`]
        }, {
            component: 'antd.Menu.Item',
            key: 'userSetting',
            children: [{
                component: 'antd.Icon',
                type: 'setting'
            }, `{{$i18n('menu.account.settings')}}`]
        }, {
            component: 'antd.Menu.Item',
            key: 'devtool',
            children: [{
                component: 'antd.Icon',
                type: 'tool'
            }, `{{$i18n('menu.devtool')}}`]
        }, {
            component: 'antd.Menu.Item',
            key: 'appstore',
            children: [{
                component: 'antd.Icon',
                type: 'appstore'
            }, `{{$i18n('menu.appstore')}}`]
        }, {
            component: 'antd.Menu.Divider'
        },{
            component: 'antd.Menu.Item',
            key: 'logout',
            children: [{
                component: 'antd.Icon',
                type: 'logout'
            }, `{{$i18n('menu.account.logout')}}`]
        }]
    },
    children: {
        component: 'span',
        className: styles.header.action + ' ' + styles.header.account,
        children: [{
            component: 'antd.Avatar',
            size: 'small',
            alt: "avatar",
            src: "photo.png",
            className: styles.header.avatar
        }, {
            component: 'span',
            className: styles.header.name,
            children: "{{data.other.currentUser?data.other.currentUser.name:'13334445556'}}"
        }]
    }
}

const notice = {
    component: 'antdpro.NoticeIcon',
    className: styles.header.action,
    count: '{{!data.notices.unread ? 0 : data.notices.unread.notification + data.notices.unread.message +data.notices.unread.event}}',
    locale: {
        emptyText: `{{$i18n('component.noticeIcon.empty')}}`,
        clear: `{{$i18n('component.noticeIcon.clear')}}`,
    },
    clearClose: true,
    onClear: '{{$clearNotice}}',
    children: [{
        component: 'antdpro.NoticeIcon.Tab',
        title: `{{$i18n('component.globalHeader.notification')}}`,
        name: "notification",
        emptyText: `{{$i18n('component.globalHeader.notification.empty')}}`,
        emptyImage: "empty.svg",
        count: '{{data.notices.unread && data.notices.unread.notification}}',
        list: '{{data.notices.value && data.notices.value.notification}}'
    }, {
        component: 'antdpro.NoticeIcon.Tab',
        title: `{{$i18n('component.globalHeader.message')}}`,
        name: "message",
        emptyText: `{{$i18n('component.globalHeader.message.empty')}}`,
        emptyImage: "empty.svg",
        count: '{{data.notices.unread && data.notices.unread.message}}',
        list: '{{data.notices.value && data.notices.value.message}}'
    }, {
        component: 'antdpro.NoticeIcon.Tab',
        title: `{{$i18n('component.globalHeader.event')}}`,
        name: "event",
        emptyText: `{{$i18n('component.globalHeader.event.empty')}}`,
        emptyImage: "empty.svg",
        count: '{{data.notices.unread && data.notices.unread.event}}',
        list: '{{data.notices.value && data.notices.value.event}}'
    }]
}

const header = {
    component: 'antd.Layout.Header',
    style: { padding: 0, width: true },
    className: `{{data.setting.fixedHeader ? ${styles.header.fixedHeader}: ''}}`,
    children: {
        component: 'div',
        className: styles.header.header,
        children: [{
            component: 'a',
            className: styles.header.logo,
            onClick: `{{()=>{$drawerVisible(!$base.gs('data.setting.drawerVisible'))}}}`,
            children: {
                component: 'img',
                src: '{{$image.logo}}',
                alt: "logo",
                width: "32",
            },
            _visible: '{{isMobile}}',
        }, {
            component: 'span',
            className: styles.header.trigger,
            onClick: '{{()=>$onCollapse(!data.setting.collapsed)}}',
            children: {
                component: 'antd.Icon',
                type: `{{data.setting.collapsed? 'menu-unfold' : 'menu-fold'}}`
            }
        }, {
            component: 'div',
            className: styles.header.right,
            children: [{
                component: 'antdpro.HeaderSearch',
                className: styles.header.action + ' ' + styles.header.search,
                placeholder: `{{$i18n('component.globalHeader.search')}}`,
                dataSource: `{{[$i18n('component.globalHeader.search.example1'),$i18n('component.globalHeader.search.example2')]}}`,
                onSearch: `{{value => {
                    console.log('input', value);
                }}}`,
                onPressEnter: `{{value => {
                    console.log('enter', value); 
                  }}}`
            }, {
                component: 'antd.Tooltip',
                title: `{{$i18n('component.globalHeader.help')}}`,
                children: {
                    component: 'a',
                    className: styles.header.action,
                    onClick: `{{()=>$setContent('doc', 'doc')}}`,
                    children: {
                        component: 'antd.Icon',
                        type: 'question-circle-o'
                    }
                }
            }, notice, user, {
                component: 'LocaleSelector',
                overlayClassName: styles.header.dropdown.container,
                className: styles.lang.dropDown + ' ' + styles.header.action
            }]
        }]
    }
}

const siderMenu = {
    component: 'antd.Layout.Sider',
    trigger: '{{null}}',
    collapsible: true,
    collapsed: '{{data.setting.collapsed}}',
    breakpoint: "lg",
    onCollapse: '{{$onCollapse}}',
    width: 256,
    theme: '{{data.setting.theme}}',
    className: `{{$classnames('${styles.sider.sider}',{
        '${styles.sider.fixSiderbar}': data.fixSiderbar,
        '${styles.sider.light}': data.setting.theme === 'light'
    })}}`,
    children: [{
        component: 'div',
        className: styles.sider.logo,
        children: [{
            component: 'img',
            src: '{{$image.logo}}',

        }, {
            component: 'h1',
            children: 'Application'
        }]
    }, {
        component: 'antd.Menu',
        mode: '{{data.setting.mode}}',
        theme: '{{data.setting.theme}}',
        selectedKeys: "{{$getMenuSelectKeys()}}",
        onClick: '{{$menuClick}}',
        onOpenChange: '{{$menuOpenChange}}',
        openKeys: '{{{return data.menuOpenKeys}}}',
        style: { padding: '16px 0', width: '100%' },
        className: `{{$classnames({'top-nav-menu': data.setting.mode === 'horizontal'})}}`,
        children: '{{$getMenuChildren()}}'
    }]
}

const content = {
    component: 'antd.Layout.Content',
    className: styles.content,
    children: [{
        component: 'div',
        className: 'portal-content-main',
        _visible: '{{!!(data.content && data.content.appName)}}',
        children: [{
            component: 'div',
            className: "portal-content-main-tabs",
            children: {
                component: 'antd.Tabs',
                type: "editable-card",
                hideAdd: true,
                activeKey: '{{data.content && data.content.appName}}',
                onChange: '{{$tabChange}}',
                onEdit: '{{$tabEdit}}',
                children: [{
                    _for: 'item in data.openTabs',
                    component: 'antd.Tabs.TabPane',
                    key: `{{item.appName}}`,
                    tab: `{{{
                        if(item.title){
                            return $i18n(item.title) || item.title
                        }
                        else{
                            var hit = $findMenu(data.menu,item.appName)
                            return hit ? $i18n(hit.locale): ''
                        }
                    }}}`,
                }],
                _visible: '{{ data.isTabsStyle && data.openTabs && data.openTabs.length > 0}}',
            }
        }, {
            component: 'div',
            className: "portal-content-main-app",
            children: {
                _for: 'item in data.openTabs',
                component: 'AppLoader',
                appName: '{{item && item.appName }}',
                onPortalReload: '{{$reload}}',
                setPortalContent: '{{$setContent}}',
                addTabCloseListener: '{{$addTabCloseListener}}',
                removeTabCloseListener: '{{$removeTabCloseListener}}',
                addTabActiveListener: '{{$addTabActiveListener}}',
                removeTabActiveListener: '{{$removeTabActiveListener}}',
                isTabStyle: '{{data.isTabsStyle}}',
                '...': '{{item && item.appProps}}',
                isHide: `{{ item.alwaysRender && (!data.content || data.content.appName != item.appName)}}`,
                _notRender: `{{!(data.content && data.content.appName == item.appName) && !item.alwaysRender}}`
            }
        }]

    }]
}


const layout = {
    component: 'antd.Layout',
    prefixCls: 'ant-layout',
    hasSider: `{{{return !isMobile && data.setting.layout != 'topmenu'}}}`,
    children: [{
        component: 'antd.Drawer',
        visible: '{{data.setting.drawerVisible}}',
        placement: 'left',
        onClose: '{{()=>$drawerVisible(false)}}',
        style: {
            padding: 0,
            height: '100vh',
        },
        children: {
            ...siderMenu,
            collapsed: false
        },
        _visible: '{{isMobile}}',
    }, {
        ...siderMenu,
        _visible: '{{!isMobile}}',
    }, {
        component: 'antd.Layout',
        hasSider: false,
        style: '{{$getLayoutStyle(isMobile)}}',
        children: [header, content]
    }, {
        component: 'div',
        className: 'portal-option',
        onClick: '{{$openOption}}',
        children: {
            component: 'antd.Icon',
            type: 'setting',
        }
    }, {
        component: 'antd.Drawer',
        closable: true,
        onClose: '{{$openOption}}',
        visible: '{{data.optionVisible}}',
        placement: "right",
        children: {
            component: 'AppLoader',
            appName: 'option',
            onPortalReload: '{{$reload}}',
        }
    }]

}


const view = {
    component: 'Media',
    _visible: '{{data.menu.length > 0}}',
    query: "(max-width: 599px)",
    children: {
        _function: '(isMobile)',
        component: 'div',
        children: [{
            component: 'ReactContainerQuery.ContainerQuery',
            query: {
                'portal-screen-xs': {
                    maxWidth: 575,
                },
                'portal-screen-sm': {
                    minWidth: 576,
                    maxWidth: 767,
                },
                'portal-screen-md': {
                    minWidth: 768,
                    maxWidth: 991,
                },
                'portal-screen-lg': {
                    minWidth: 992,
                    maxWidth: 1199,
                },
                'portal-screen-xl': {
                    minWidth: 1200,
                    maxWidth: 1599,
                },
                'portal-screen-xxl': {
                    minWidth: 1600,
                },
            },
            children: {
                _function: '(params)',
                component: 'div',
                className: `{{$classnames('portal',params)}}`,
                children: layout
            }
        }]
    }
}

export default view