const ThemeRow = {
    component: 'div',
    style: { marginBottom: 24 },
    children: [{
        component: 'h3',
        className: `{{$styles('title')}}`,
        children: `{{$i18n('app.setting.pagestyle')}}`
    }, {
        component: 'div',
        className: `{{$styles('blockChecbox')}}`,
        children: [{
            _for: 'item in data.themes',
            component: 'antd.Tooltip',
            title: `{{$i18n(item.locale)}}`,
            children: [{
                component: 'div',
                className: `{{$styles('item')}}`,
                onClick: `{{$styleChange(item.key)}}`,
                children: [{
                    component: 'img',
                    src: '{{item.img}}',
                }, {
                    component: 'div',
                    className: `{{$styles('selectIcon')}}`,
                    style: `{{{
                            return {display: data.setting.theme === item.key ? 'block' : 'none'}
                        }}}`,
                    children: {
                        component: 'antd.Icon',
                        type: 'check'
                    }
                }]
            }]
        }]
    }]
}

const ThemeColorRow = {
    component: 'div',
    className: `{{$styles('themeColor')}}`,
    children: [{
        component: 'h3',
        className: `{{$styles('title')}}`,
        children: `{{$i18n('app.setting.themecolor')}}`,
        value: '{{data.setting.activePrimaryColor}}',

    }, {
        component: 'div',
        className: `{{$styles('content')}}`,
        children: {
            _for: 'item in data.primaryColors',
            component: 'antd.Tooltip',
            title: `{{$i18n('app.setting.themecolor.' + item.key)}}`,
            children: {
                component: 'div',
                className: `{{$styles('colorBlock')}}`,
                style: `{{{return {backgroundColor:item.color}}}}`,
                onClick: '{{$primaryColorChange(item)}}',
                children: {
                    component: 'antd.Icon',
                    type: 'check',
                    _visible: '{{data.setting.activePrimaryColor === item.key}}'
                }
            }
        }
    }]
}

const NavModeRow = {
    component: 'div',
    style: { marginBottom: 24 },
    children: [{
        component: 'h3',
        className: `{{$styles('title')}}`,
        children: `{{$i18n('app.setting.navigationmode')}}`
    }, {
        component: 'div',
        className: `{{$styles('blockChecbox')}}`,
        children: [{
            _for: 'item in data.navModes',
            component: 'antd.Tooltip',
            title: `{{$i18n(item.locale)}}`,
            children: [{
                component: 'div',
                className: `{{$styles('item')}}`,
                onClick: `{{ ()=>$changeSetting('layout', item.key)}}`,
                children: [{
                    component: 'img',
                    src: '{{item.img}}',
                }, {
                    component: 'div',
                    className: `{{$styles('selectIcon')}}`,
                    style: `{{{
                            return {display: data.setting.layout === item.key ? 'block' : 'none'}
                        }}}`,
                    children: {
                        component: 'antd.Icon',
                        type: 'check'
                    }
                }]
            }]
        }]
    }]
}

const OtherRow = {
    component: 'div',
    style: { marginBottom: 24 },
    children: [{
        component: 'h3',
        className: `{{$styles('title')}}`,
        children: `{{$i18n('app.setting.othersettings')}}`
    }, {
        component: 'antd.List.Item',
        actions:[{
            component: 'antd.Switch',
            siz: 'small',
            checked:`{{!!data.setting.colorWeak}}`,
            onChange:`{{checked => $changeSetting('colorWeak', checked)}}`,
        }],
        children: `{{$i18n('app.setting.weakmode')}}`
    }]

}

export default {
    component: 'antd.Drawer',
    visible: '{{data.drawerOpen}}',
    onClose: '{{$toggleContent}}',
    onHandleClick: '{{$toggleContent}}',
    width: 300,
    placement: "right",
    title: `{{$i18n('app.settings.security.set')}}`,
    style: { zIndex: 999 },
    handler: {
        component: 'div',
        className: `{{$styles('handle')}}`,
        children: [{
            component: 'antd.Icon',
            type: `{{data.drawerOpen ? 'close': 'setting'}}`,
            style: {
                color: '#fff',
                fontSize: 20,
            }
        }],
    },
    children: [{
        component: 'div',
        className: `{{$styles('content')}}`,
        children: [ThemeRow, ThemeColorRow, {
            component: 'antd.Divider'
        }, NavModeRow, {
                component: 'antd.List',
                split: false,
                dataSource: [{
                    title: `{{$i18n('app.setting.content-width')}}`,
                    action: [{
                        component: 'antd.Select',
                        value: '{{data.setting.contentWidth}}',
                        size: 'small',
                        onSelect: `{{value=>$changeSetting('contentWidth', value)}}`,
                        style: { width: 80 },
                        children: [{
                            component: 'antd.Select.Option',
                            value: 'Fixed',
                            children: `{{$i18n('app.setting.content-width.fixed')}}`,
                            _visible: `{{data.setting.layout === 'topmenu'}}`
                        }, {
                            component: 'antd.Select.Option',
                            value: 'Fluid',
                            children: `{{$i18n('app.setting.content-width.fluid')}}`,
                        }]
                    }]
                }, {
                    title: `{{$i18n('app.setting.fixedheader')}}`,
                    action: [{
                        component: 'antd.Switch',
                        size: 'small',
                        checked: '{{!!data.setting.fixedHeader}}',
                        onChange: `{{(checked)=>$changeSetting('fixedHeader', checked)}}`
                    }]
                }, {
                    title: `{{$i18n('app.setting.fixedsidebar')}}`,
                    action: [{
                        component: 'antd.Switch',
                        size: 'small',
                        checked: '{{!!data.setting.fixedSiderbar}}',
                        onChange: `{{(checked)=>$changeSetting('fixedSiderbar', checked)}}`
                    }]
                }, {
                    title: `{{$i18n('app.setting.horizontalMenu')}}`,
                    action: [{
                        component: 'antd.Switch',
                        size: 'small',
                        checked: '{{!!data.setting.horizontalMenu}}',
                        onChange: `{{(checked)=>$changeSetting('horizontalMenu', checked)}}`
                    }]
                }, {
                    title: `{{$i18n('app.setting.tabStyle')}}`,
                    action: [{
                        component: 'antd.Switch',
                        size: 'small',
                        checked: '{{!!data.setting.tabStyle}}',
                        onChange: `{{(checked)=>$changeSetting('tabStyle', checked)}}`
                    }]
                }],
                renderItem: {
                    _function: '(item)',
                    component: 'antd.List.Item',
                    actions: '{{item.action}}',
                    children: {
                        component: 'span',
                        children: '{{item.title}}'
                    }
                }
            }, {
                component: 'antd.Divider'
            }, OtherRow]
    }]

}