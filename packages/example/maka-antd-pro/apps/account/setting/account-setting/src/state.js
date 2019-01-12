const menuMap = {
    base: {
        id: 'app.settings.menuMap.basic',
        defaultMessage: 'Basic Settings'
    },
    security: {
        id: 'app.settings.menuMap.security',
        defaultMessage: 'Security Settings'
    },
    binding: {
        id: 'app.settings.menuMap.binding',
        defaultMessage: 'Account Binding'
    },
    notification: {
        id: 'app.settings.menuMap.notification',
        defaultMessage: 'New Message Notification'
    }
}

export default  {
    data: {
        menuMap,
        mode: 'inline',
        selectKey: 'base',
    }
}