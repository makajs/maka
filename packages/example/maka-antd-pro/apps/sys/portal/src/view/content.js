export default {
    component: 'Fragment',
    children: [{
        component: 'div',
        className: `{{{
            var clsName = 'portal-tabs '
            clsName += (data.setting.fixedHeader?'portal-tabs-fixedHeader ':'')
            return clsName
        }}}`,
        style: '{{{ return { padding: 0, width: $getHeadWidth(isMobile) }}}}',
        _visible: '{{data.setting.tabStyle}}',
        children: {
            component: 'antd.Tabs',
            className: `{{{
                return ((data.setting.layout === 'topmenu' && data.setting.contentWidth === 'Fixed')?$styles('wide'):'')
            }}}`,
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
        className: `{{{
            var clsName = 'portal-breadcrumb '
            clsName += (data.setting.fixedHeader?'portal-breadcrumb-fixedHeader ':'')
            return clsName
        }}}`,
        style: '{{{ return { padding: 0, width: $getHeadWidth(isMobile) }}}}',
        //_visible: '{{!data.setting.tabStyle}}',
        _visible: false, //面包屑暂时不启用
        children: {
            component: 'antd.Breadcrumb',
            className: `{{{
                return ((data.setting.layout === 'topmenu' && data.setting.contentWidth === 'Fixed')?$styles('wide'):'')
            }}}`,
            style: '{{{ return { padding: 0, width: $getHeadWidth(isMobile) }}}}',
            children: [{
                component: 'antd.Breadcrumb.Item',
                children: `{{{
                if(!data.openTabs || data.openTabs.length == 0) return ''
                var item = data.openTabs[0]
                if(item.title){
                    return $i18n(item.title) || item.title
                }
                else{
                    var hit = $findMenu(data.menu,item.appName)
                    return hit ? $i18n(hit.locale): ''
                }
            }}}`,
            }],
        }
    }, {
        component: 'antd.Layout.Content',
        className: `{{$styles('content')}}`,
        style: `{{{
            if(data.setting.fixedHeader && data.setting.tabStyle )
                return {}
            else if(data.setting.fixedHeader && !data.setting.tabStyle ){
                return {paddingTop:64}
            }
            else{
                return {paddingTop:0}
            }
        }}}`,
        children: [{
            component: 'div',
            className: `{{'portal-content-main ' +  (data.setting.contentWidth === 'Fixed' ? $styles('wide'):'') }}`,
            _visible: '{{!!(data.content && data.content.appName)}}',
            children: [{
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
    }]

}
