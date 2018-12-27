export default {
    component: 'div',
    className: 'portal',
    children: [{
        component: 'div',
        className: 'portal-header',
        children: [{
            component: 'div',
            className: "{{'portal-header-left portal-header-left-' + (data.isFoldMenu?'fold':'unfold') }}",
            children: [{
                component: 'img',
                className: 'portal-header-left-logo',
                src: 'logo.png'
            }, {
                component: 'span',
                className: 'portal-header-left-caption',
                children: 'Application',
                _visible: '{{!data.isFoldMenu}}',
            }]
        }, {
            component: 'div',
            className: "portal-header-center",
            children:[{
                component: 'div',
                className: 'portal-header-center-foldMenu',
                onClick: '{{$foldMenu}}',
                children: [{
                    component: 'antd.Icon',
                    type: `{{data.isFoldMenu ? 'menu-unfold-o' :'menu-fold-o'}}`,
                    title: `{{data.isFoldMenu ? 'Open' :'Close'}}`,
                    style: { fontSize: 19 },
                }]
            }]

        }, {
            component: 'div',
            className: "portal-header-right",
            children: [{
                component: 'antd.Popover',
                placement: 'bottomRight',
                children: {
                    component: 'div',
                    className: "portal-header-right-search",
                    children: {
                        component: 'antd.Icon',
                        type: 'search'
                    },
                },
                content: {
                    component: 'antd.Input.Search'
                }
            }, {
                component: 'antd.Popover',
                placement: 'bottomRight',
                autoAdjustOverflow: true,
                overlayStyle: { width: 300 },
                children: {
                    component: 'div',
                    className: "portal-header-right-search",
                    children: {
                        component: 'antd.Badge',
                        count: 5,
                        offset: [0, 2],
                        children: {
                            component: 'antd.Icon',
                            size: 'large',
                            type: 'bell'
                        }
                    },
                },
                content: {
                    component: 'AppLoader',
                    appName: 'portal-notice'
                }
            }, {
                component: 'div',
                className: "portal-header-right-topMenu",
                children: [{
                    component: 'antd.Menu',
                    className: "portal-header-right-topMenu",
                    mode: 'horizontal',
                    onClick: '{{$topMenuClick}}',
                    selectedKeys: [],
                    children: [{
                        component: 'antd.Menu.Item',
                        key: 'toggleTabs',
                        _visible: false,
                        children: [{
                            component: 'antd.Icon',
                            type: 'appstore-o'
                        },
                            "{{data.isTabsStyle ? 'Normal' : 'Tabs'}}"]
                    }, {
                        component: 'antd.Menu.SubMenu',
                        key: 'my',
                        title: {
                            component: 'span',
                            className: 'portal-header-right-my-title',
                            children: [{
                                component: 'img',
                                className: 'portal-header-right-photo',
                                src: 'photo.png'
                            }, "{{data.other.currentUser?data.other.currentUser.name:'13334445556'}}"]
                        },
                        children: [{
                            component: 'antd.Menu.Item',
                            key: 'mySetting',
                            children: '个人设置'
                        }, {
                            component: 'antd.Menu.Item',
                            key: 'logout',
                            children: '注销'
                        }]
                    }]
                }]
            }]
        }]
    }, {
        component: 'div',
        className: 'portal-content',
        children: [{
            component: 'div',
            className: "{{'portal-content-left portal-content-left-' + (data.isFoldMenu?'fold':'unfold') }}",
            style: "{{({overflow:data.isFoldMenu?'visible':'auto'})}}",
            children: [{
                component: 'antd.Menu',
                mode: 'vertical',
                theme: `{{ data.setting.activeStyle || 'dark'}}`,
                className: 'portal-content-left-menu',
                inlineCollapsed: '{{data.isFoldMenu}}',
                selectedKeys: "{{$getMenuSelectKeys()}}",
                defaultOpenKeys: "{{data.menuDefaultOpenKeys}}",
                onClick: '{{$menuClick}}',
                getPopupContainer: () => { return document.querySelector('.portal-content-left-menu') },
                children: '{{$getMenuChildren()}}'
            }]
        }, {
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
                        tab: '{{item.title}}'
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
                    onPortalReload: '{{$load}}',
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
    },{
        component: 'div',
        className: 'portal-option',
        onClick: '{{$openOption}}',
        children: {
            component: 'antd.Icon',
            type: 'setting',
        }
    },{
        component: 'antd.Drawer',
        title: "设置",
        closable: true,
        onClose:  '{{$openOption}}',
        visible: '{{data.optionVisible}}',
        children: {
            component: 'AppLoader',
            appName: 'sys-option',
            onPortalReload: '{{$load}}',

        }
    }]
}