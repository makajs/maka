const styles = {
}


const action = {
    component: 'antd.Switch',
    checkedChildren: `{{$i18n('app.settings.open')}}`,
    unCheckedChildren: `{{$i18n('app.settings.close')}}`,
    defaultChecked: true
}

const dataSource = [{
    title: `{{$i18n('app.settings.notification.password')}}`,
    description: `{{$i18n('app.settings.notification.password-description')}}`,
    action: [action]
}, {
    title: `{{$i18n('app.settings.notification.messages')}}`,
    description: `{{$i18n('app.settings.notification.messages-description')}}`,
    action: [action]
}, {
    title: `{{$i18n('app.settings.notification.todo')}}`,
    description: `{{$i18n('app.settings.notification.todo-description')}}`,
    action: [action]
}]

export default {
    component: 'div',
    children: {
        component: 'antd.List',
        itemLayout: "horizontal",
        dataSource: dataSource,
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