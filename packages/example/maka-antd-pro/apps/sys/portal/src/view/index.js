import SiderMenu from './siderMenu'
import Header from './header'
import Content from './content'

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
        className: `{{$styles('menu-drawer')}}`,
        title: null,
        children: {
            ...SiderMenu,
            collapsed: false
        },
        _visible: '{{isMobile}}',
    }, {
        ...SiderMenu,
        _visible: `{{!isMobile && data.setting.layout === 'sidermenu'}}`,
    }, {
        component: 'antd.Layout',
        hasSider: false,
        style: '{{$getLayoutStyle(isMobile)}}',
        children: [Header, Content]
    }, /*{
        component: 'div',
        className: 'portal-option',
        onClick: '{{$openOption}}',
        children: {
            component: 'antd.Icon',
            type: 'setting',
        }
    }*/ {
        //component: 'antd.Drawer',
        //closable: true,
        //onClose: '{{$openOption}}',
        //visible: '{{data.optionVisible}}',
        //placement: "right",
       // children: {
            component: 'AppLoader',
            appName: 'option',
            onPortalReload: '{{$reload}}',
        //}
    }]

}

export default {
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