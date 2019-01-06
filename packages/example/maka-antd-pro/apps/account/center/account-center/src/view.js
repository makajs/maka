const styles = {
    accountCenter: 'account-center',
    avatarHolder: 'account-center-avatarHolder',
    name: 'account-center-name',
    detail: 'account-center-detail',
    title: 'account-center-title',
    group: 'account-center-group',
    address: 'account-center-address',
    tags: 'account-center-tags',
    tagsTitle: 'account-center-tagsTitle',
    teamTitle: 'account-center-teamTitle',
    team: 'account-center-team',
    tabsCard: 'account-center-tabsCard'
}

const operationTabList = [
    {
        key: 'articles',
        tab: {
            component: 'span',
            children: ['文章', {
                component: 'span',
                style: { fontSize: 14 },
                children:'(8)'
            }]
        }
    },
    {
        key: 'applications',
        tab: {
            component: 'span',
            children: ['应用', {
                component: 'span',
                style: { fontSize: 14 },
                children: '(8)'
            }]
        }
    },
    {
        key: 'projects',
        tab: {
            component: 'span',
            children: ['项目', {
                component: 'span',
                style: { fontSize: 14 },
                children: '(8)'
            }]
        },
    },
];

export default {
    component: 'div',
    className: styles.accountCenter,
    children: [{
        component: 'antd.Row',
        gutter: 24,
        children: [{
            component: 'antd.Col',
            lg: 7,
            md: 24,
            children: [{
                component: 'antd.Card',
                border: false,
                style: { marginBottom: 24 },
                children: [{
                    component: 'div',
                    children: [{
                        component: 'div',
                        className: styles.avatarHolder,
                        children: [{
                            component: 'img',
                            alt: '',
                            src: '{{data.currentUser.avatar}}',
                        }, {
                            component: 'div',
                            className: styles.name,
                            children: '{{data.currentUser.name}}',
                        }, {
                            component: 'div',
                            children: '{{data.currentUser.signature}}'
                        }]
                    }, {
                        component: 'div',
                        className: styles.detail,
                        children: [{
                            component: 'p',
                            children: [{
                                component: 'i',
                                className: styles.title,
                            }, '{{data.currentUser.title}}']
                        }, {
                            component: 'p',
                            children: [{
                                component: 'i',
                                className: styles.group,
                            }, '{{data.currentUser.group}}']
                        }, {
                            component: 'p',
                            children: [{
                                component: 'i',
                                className: styles.address,

                            }, '{{data.currentUser.geographic.province.label}}', '{{data.currentUser.geographic.city.label}}']
                        }]
                    }, {
                        component: 'antd.Divider',
                        dashed: true,
                    }, {
                        component: 'div',
                        className: styles.tags,
                        children: [{
                            component: 'div',
                            className: styles.tagsTitle,
                            children: '标签',
                        }, {
                            _for: 'item in data.currentUser.tags',
                            component: 'antd.Tag',
                            key: '{{item.key}}',
                            children: '{{item.label}}'
                        }, {
                            component: 'antd.Input',
                            type: 'text',
                            size: 'small',
                            style: { width: 78 },
                            value: '{{data.inputValue}}',
                            onChange: '{{$inputChange}}',
                            onBlur: '{{$inputConfirm}}',
                            onPressEnter: '{{$inputConfirm}}',
                            _visible: '{{data.inputVisible}}'
                        }, {
                            component: 'antd.Tag',
                            onClick: '{{$showInput}}',
                            style: { background: '#fff', borderStyle: 'dashed' },
                            children: {
                                component: 'antd.Icon',
                                type: 'plus'
                            },
                            _visible: '{{data.inputVisible}}'
                        }]
                    }, {
                        component: 'antd.Divider',
                        style: { marginTop: 16 },
                        dashed: true,

                    }, {
                        component: 'div',
                        className: styles.team,
                        children: [{
                            component: 'div',
                            className: styles.teamTitle,
                            children: '团队'
                        }, {
                            component: 'antd.Row',
                            gutter: 36,
                            children: {
                                _for: 'notice in data.notice',
                                component: 'antd.Col',
                                key: '{{notice.id}}',
                                lg: 24,
                                xl: 12,
                                children: [{
                                    component: 'a',
                                    children: [{
                                        component: 'antd.Avatar',
                                        size: 'small',
                                        src: '{{notice.logo}}',
                                    }, '{{notice.member}}']
                                }]
                            }

                        }]
                    }]
                }]
            }]
        },{
            component: 'antd.Col',
            lg: 17,
            md: 24,
            children:[{
                component: 'antd.Card',
                border: false,
                tabList: operationTabList,
                activeTabKey: '{{data.activeTabKey}}',
                onTabChange: `{{(key)=>$base.ss({'data.activeTabKey':key})}}`,
                children:[{
                    component: 'AppLoader',
                    appName: 'account-center-article',
                    _visible: `{{data.activeTabKey === 'articles'}}`
                },{
                    component: 'AppLoader',
                    appName: 'account-center-application',
                    _visible: `{{data.activeTabKey === 'applications'}}`
                },{
                    component: 'AppLoader',
                    appName: 'account-center-project',
                    _visible: `{{data.activeTabKey === 'projects'}}`
                }]
            }]
        }]
    }]
}