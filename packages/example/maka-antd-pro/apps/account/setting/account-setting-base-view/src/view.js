const styles = {
    baseView: 'account-setting-base-view-baseview',
    left: 'account-setting-base-view-left',
    right: 'account-setting-base-view-right',
    avatar_title: 'account-setting-base-view-avatar_title',
    avatar:'account-setting-base-view-avatar',
    button_view: 'account-setting-base-view-button_view',
}

export default {
    component: 'div',
    className: styles.baseView,
    children: [{
        component: 'div',
        className: styles.left,
        children: [{
            component: 'antd.Form',
            layout: 'vertical',
            onSubmit: '{{$submitHandler}}',
            hideRequiredMark: true,
            children: [{
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.email')}}`,
                children: {
                    component: 'antd.Input',
                    _decorator: `{{$getFieldDecorator('email', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.email-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.nickname')}}`,
                children: {
                    component: 'antd.Input',
                    _decorator: `{{$getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.nickname-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.profile')}}`,
                children: {
                    component: 'antd.Input.TextArea',
                    placeholder: `{{$i18n('app.settings.basic.profile-placeholder')}}`,
                    rows: 4,
                    _decorator: `{{$getFieldDecorator('profile', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.profile-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.country')}}`,
                children: {
                    component: 'antd.Select',
                    style: {
                        maxWidth: 220,
                    },
                    children: [{
                        component: 'antd.Select.Option',
                        value: 'China',
                        children: '中国'
                    }],
                    _decorator: `{{$getFieldDecorator('country', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.country-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.geographic')}}`,
                children: {
                    component: 'GeographicView',
                    provinces: '{{data.provinces}}',
                    citys: '{{data.citys}}',
                    _decorator: `{{$getFieldDecorator('geographic', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.geographic-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.address')}}`,
                children: {
                    component: 'antd.Input',
                    _decorator: `{{$getFieldDecorator('address', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.address-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Form.Item',
                label: `{{$i18n('app.settings.basic.phone')}}`,
                children: {
                    component: 'antd.Input',
                    _decorator: `{{$getFieldDecorator('phone', {
                        rules: [{
                            required: true,
                            message: $i18n('app.settings.basic.phone-message')
                        }]
                    })}}`
                }
            }, {
                component: 'antd.Button',
                type: 'primary',
                children: `{{$i18n('app.settings.basic.update',{defaultMessage:'Update Information'})}}`
            }]
        }]
    }, {
        component: 'div',
        className: styles.right,
        children: [{
            component: 'div',
            className: styles.avatar_title,
            children: `{{$i18n('app.settings.basic.avatar', {defaultMessage:'Avatar'})}}`
        },{
            component: 'div',
            className: styles.avatar,
            children: {
                component: 'img',
                src: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                alt: 'avatar'
            },
        },{
            component: 'antd.Upload',
            fileList: [],
            children: [{
                component: 'div',
                className: styles.button_view,
                children: [{
                    component: 'antd.Button',
                    icon: 'update',
                    children: `{{$i18n('app.settings.basic.change-avatar', {defaultMessage: 'Change avatar'})}}`
                }]
            }]
        }]
    }]
}