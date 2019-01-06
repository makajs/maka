const styles = {
    main: 'account-setting-main',
    leftmenu: 'account-setting-leftmenu',
    right: 'account-setting-right',
    title: 'account-setting-title',
}
export default {
    component: 'div',
    className: styles.main,
    children: [{
        component: 'div',
        className: styles.leftmenu,
        children: [{
            component: 'antd.Menu',
            mode: '{{data.mode}}',
            selectedKeys:'{{[data.selectKey]}}',
            onClick:`{{({key})=>$base.ss({'data.selectKey':key})}}`,
            children: {
                _for: 'item in Object.keys(data.menuMap)',
                component: 'antd.Menu.Item',
                key: '{{item}}',
                children: '{{$i18n(data.menuMap[item].id, {defaultMessage: data.menuMap[item].defaultMessage})}}'
            }
        }]
    },{
        component: 'div',
        className: styles.right,
        children: [{
            component: 'div',
            className: styles.title,
            children: '{{data.menuMap[data.selectKey]}}',
            children: [{
                component: 'AppLoader',
                appName: 'account-setting-base-view',
                _visible: `{{data.selectKey === 'base'}}`
            },{
                component: 'AppLoader',
                appName: 'account-setting-bind-view',
                _visible: `{{data.selectKey === 'binding'}}`
            },{
                component: 'AppLoader',
                appName: 'account-setting-security-view',
                _visible: `{{data.selectKey === 'security'}}`
            },{
                component: 'AppLoader',
                appName: 'account-setting-notification-view',
                _visible: `{{data.selectKey === 'notification'}}`
            }]
        }]
    }]
}