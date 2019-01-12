const user = {
    component: 'antd.Dropdown',
    overlayClassName: `{{$styles('header-dropdown-container')}}`,//styles.header.dropdown.container,
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
        }, {
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
        className: `{{$styles('header-action') + ' ' + $styles('header-account')}}`,//styles.header.action + ' ' + styles.header.account,
        children: [{
            component: 'antd.Avatar',
            size: 'small',
            alt: "avatar",
            src: "photo.png",
            className: `{{$styles('header-avatar')}}`//styles.header.avatar
        }, {
            component: 'span',
            className: `{{$styles('header-name')}}`,//styles.header.name,
            children: "{{data.other.currentUser?data.other.currentUser.name:'13334445556'}}"
        }]
    }
}

const notice = {
    component: 'antdpro.NoticeIcon',
    className: `{{$styles('header-action')}}`,//styles.header.action,
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

export default {
    component: 'div',
    className: `{{{
        return $styles('header-right') + ' ' + ((data.setting.theme == 'dark' && data.setting.layout=='topmenu' && !isMobile) ? $styles('header-dark'): '')
    }}}`,
    children: [{
        component: 'antdpro.HeaderSearch',
        className: `{{$styles('header-action') + ' ' + $styles('header-search')}}`,//styles.header.action + ' ' + styles.header.search,
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
            className: `{{$styles('header-action')}}`,//styles.header.action,
            onClick: `{{()=>$setContent('doc', 'doc')}}`,
            children: {
                component: 'antd.Icon',
                type: 'question-circle-o'
            }
        }
    }, notice, user, {
        component: 'LocaleSelector',
        overlayClassName: `{{$styles('header-dropdown-container')}}`,//styles.header.dropdown.container,
        className: `{{$styles('header-lang-dropDown') + ' ' + $styles('header-action')}}`//styles.lang.dropDown + ' ' + styles.header.action
    }]
}