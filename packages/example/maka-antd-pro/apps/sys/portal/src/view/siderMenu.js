export default {
    component: 'antd.Layout.Sider',
    trigger: '{{null}}',
    collapsible: true,
    collapsed: '{{data.setting.collapsed}}',
    breakpoint: "lg",
    onCollapse: '{{$onCollapse}}',
    width: 256,
    theme: '{{data.setting.theme}}',
    className: `{{$classnames($styles('sider-sider'),{
        [$styles('sider-fixSiderbar')]: data.setting.fixedSiderbar,
        [$styles('sider-light')]: data.setting.theme === 'light'
    })}}`,
    children: [{
        component: 'div',
        className: `{{$styles('sider-logo')}}`,//styles.sider.logo,
        children: [{
            component: 'img',
            src: '{{$image.logo}}',

        }, {
            component: 'h1',
            children: 'Antd pro'
        }]
    }, {
        component: 'antd.Menu',
        //mode: '{{data.setting.mode}}',
        mode: `{{data.setting.horizontalMenu ? 'vertical' : 'inline'}}`,
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