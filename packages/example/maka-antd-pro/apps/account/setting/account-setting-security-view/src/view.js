const styles = {
}


const passwordStrength = {
    strong: {
        component: 'font',
        className: 'strong',
        children: `{{$i18n('app.settings.security.strong',{defaultMessage: 'Strong'})}}`
    },
    strong: {
        component: 'font',
        className: 'strong',
        children: `{{$i18n('app.settings.security.strong',{defaultMessage: 'Strong'})}}`
    },
    weak: {
        component: 'font',
        className: 'weak',
        children: `{{$i18n('app.settings.security.weak',{defaultMessage: 'Weak'})}}`
    }
}

export default {
    component: 'div',
    children: {
        component: 'antd.List',
        dataSource: [{
            title: `{{$i18n('app.settings.security.password')}}`,
            description: [
                `{{$i18n('app.settings.security.password-description')}}`,
               passwordStrength.strong
            ],
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.security.modify',{defaultMessage:'Modify'})}}`
            }]
        },{
            title: `{{$i18n('app.settings.security.phone')}}`,
            description: `{{$i18n('app.settings.security.phone-description') +'：138****8293'}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.security.modify',{defaultMessage:'Modify'})}}`
            }]
        },{
            title: `{{$i18n('app.settings.security.question')}}`,
            description: `{{$i18n('app.settings.security.question-description')}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.security.set',{defaultMessage:'Set'})}}`
            }],
        },{
            title: `{{$i18n('app.settings.security.email')}}`,
            description: `{{$i18n('app.settings.security.email-description')}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.security.modify',{defaultMessage:'Modify'})}}`
            }],
        },{
            title: `{{$i18n('app.settings.security.mfa')}}`,
            description: `{{$i18n('app.settings.security.mfa-description')}}`,
            action: [{
                component: 'a',
                children: `{{$i18n('app.settings.security.bind',{defaultMessage:'Bind'})}}`
            }],
        }],
        renderItem: {
            _function: '(item)',
            component: 'antd.List.Item',
            actions: '{{item.action}}',
            children: {
                component: 'antd.List.Item.Meta',
                title: '{{item.title}}',
                description: '{{item.description}}'
            }
        }
    }
}