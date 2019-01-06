const styles = {
}

export default {
    component: 'div',
    children: {
        component: 'antd.List',
        dataSource: [{
            title: `{{$i18n('app.settings.binding.taobao')}}`,
            description: `{{$i18n('app.settings.binding.taobao-description')}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.binding.bind',{defaultMessage:'Bind'})}}`
            }],
            avatar: {
                component:'antd.Icon',
                type: 'taobao',
                className: 'taobao'
            }
        },{
            title: `{{$i18n('app.settings.binding.alipay')}}`,
            description: `{{$i18n('app.settings.binding.alipay-description')}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.binding.bind',{defaultMessage:'Bind'})}}`
            }],
            avatar: {
                component:'antd.Icon',
                type: 'alipay',
                className: 'alipay'
            }
        },{
            title: `{{$i18n('app.settings.binding.dingding')}}`,
            description: `{{$i18n('app.settings.binding.dingding-description')}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.binding.bind',{defaultMessage:'Bind'})}}`
            }],
            avatar: {
                component:'antd.Icon',
                type: 'dingding',
                className: 'dingding'
            }
        }],
        renderItem: {
            _function: '(item)',
            component: 'antd.List.Item',
            actions: '{{item.action}}',
            children: {
                component: 'antd.List.Item.Meta',
                avatar: '{{item.avatar}}',
                title: '{{item.title}}',
                description: '{{item.description}}'
            }
        }
    }
}