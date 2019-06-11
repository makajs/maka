export default {
    component: 'div',
    className: 'portal',
    children: [{
        component: 'div',
        className: `{{(data.content && data.content.appName) ? 'portal-hidden': 'portal-show portal-header'}}`,
        children: 'ERP DEMO'
    }, {
        component: 'div',
        className: `{{(data.content && data.content.appName) ? 'portal-hidden': 'portal-content portal-show'}}`,
        children: {
            component: 'antd.TabBar',
            unselectedTintColor: "#949494",
            tintColor: "#33A3F4",
            barTintColor: "#F8FCFF",
            prerenderingSiblingsNumber: 0,
            children: [{
                title: '首页',
                key: 'home',
                component: 'antd.TabBar.Item',
                selected: `{{data.selectedTab == 'home'}}`,
                onPress: `{{()=>$base.ss({'data.selectedTab': 'home'})}}`,
                icon: {
                    component: 'FA',
                    name: 'home'
                },
                selectedIcon: {
                    component: 'FA',
                    name: 'home'
                },
                children: [{
                    component: 'AppLoader',
                    appName: 'home',
                }]
            }, {
                title: '报表',
                key: 'rpt',
                component: 'TabBar.Item',
                selected: `{{data.selectedTab == 'rpt'}}`,
                onPress: `{{()=>$base.ss({'data.selectedTab': 'rpt'})}}`,
                icon: {
                    component: 'FA',
                    name: 'bar-chart'
                },
                selectedIcon: {
                    component: 'FA',
                    name: 'bar-chart'
                },
                children: [{
                    component: 'AppLoader',
                    appName: 'rpt'
                }]
            }, {
                title: '我的',
                key: 'my',
                component: 'TabBar.Item',
                selected: `{{data.selectedTab == 'my'}}`,
                onPress: `{{()=>$base.ss({'data.selectedTab': 'my'})}}`,
                icon: {
                    component: 'FA',
                    name: 'user'
                },
                selectedIcon: {
                    component: 'FA',
                    name: 'user'
                },
                children: [{
                    component: 'AppLoader',
                    appName: 'my'
                }]
            }]
        }

    }, {
        component: 'div',
        className: `{{(data.content && data.content.appName) ? 'portal-open-page portal-open-page-show': 'portal-open-page portal-open-page-show-hidden'}}`,
        children: [{
            _for: 'item in data.openPages',
            component: 'AppLoader',
            appName: '{{item.appName}}',
            '...': '{{item.appProps}}'
        }]
    }]
}