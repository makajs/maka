

import HeaderRight from './header-right'

const GlobalHeader = {
    component: 'antd.Layout.Header',
    style: '{{{ return { padding: 0, width: $getHeadWidth(isMobile) }}}}',
    className: `{{data.setting.fixedHeader ? $styles('header-fixedHeader') : ''}}`,
    children: [{
        component: 'div',
        className: `{{$styles('header-header')}}`,//styles.header.header,
        children: [{
            component: 'a',
            className: `{{$styles('header-logo')}}`,//styles.header.logo,
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
            className: `{{$styles('header-trigger')}}`,//styles.header.trigger,
            onClick: '{{()=>$onCollapse(!data.setting.collapsed)}}',
            children: {
                component: 'antd.Icon',
                type: `{{data.setting.collapsed? 'menu-unfold' : 'menu-fold'}}`
            },
            _visible: '{{!isMobile}}',
        }, HeaderRight]
    }]
}

const TopMenuHeader = {
    component: 'antd.Layout.Header',
    style: '{{{ return { padding: 0, width: $getHeadWidth(isMobile) }}}}',
    className: `{{data.setting.fixedHeader ? $styles('header-fixedHeader') : ''}}`,
    children: {
        component: 'div',
        _visible: `{{!isMobile && data.setting.layout === 'topmenu'}}`,
        className: `{{$styles('headerMenu-head') + ' ' +( data.setting.theme==='light' ? $styles('headerMenu-light') : '')}}`,
        children: [{
            component: 'div',
            className: `{{{ return $styles('headerMenu-main') + ' ' + (data.setting.contentWidth === 'Fixed' ? $styles('headerMenu-wide'):'') }}}`,
            children: [{
                component: 'div',
                className: `{{$styles('headerMenu-left')}}`,
                children: [{
                    component: 'div',
                    className: `{{$styles('headerMenu-logo')}}`,
                    children: [{
                        component: 'a',
                        children: [{
                            component: 'img',
                            src: '{{$image.logo}}',
                            alt: 'logo'
                        }, {
                            component: 'h1',
                            children: 'Antd pro'
                        }]
                    }]
                }, {
                    component: 'div',
                    style: `{{{
                        return {
                            maxWidth: (data.setting.contentWidth === 'Fixed' ? 1200 : window.innerWidth) - 280 - 165 - 40,
                        }
                    }}}`,
                    children: {
                        component: 'antd.Menu',
                        mode: 'horizontal',
                        theme: '{{data.setting.theme}}',
                        selectedKeys: "{{$getMenuSelectKeys()}}",
                        onClick: '{{$menuClick}}',
                        //onOpenChange: '{{$menuOpenChange}}',
                        //openKeys: '{{{return data.menuOpenKeys}}}',
                        className: `{{$styles('headerMenu-menu')}}`,
                        children: '{{$getMenuChildren()}}'
                    }
                }]
            }, HeaderRight]
        }]
    }

}
export default {

    component: 'Fragment',
    children: [{
        ...TopMenuHeader,
        _visible: `{{data.setting.layout === 'topmenu' && !isMobile}}`
    }, {
        ...GlobalHeader,
        _visible: `{{data.setting.layout !== 'topmenu' || isMobile}}`
    }]
}