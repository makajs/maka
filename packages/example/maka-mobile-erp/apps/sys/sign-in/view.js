export default {
    component: 'div',
    className: 'sign-in',
    children: [{
        component: 'div',
        className: 'sign-in-header',
        children: '登录'
    }, {
        component: 'div',
        className: 'sign-in-content',
        children: [{
            component: 'antd.List',
            children: [{
                component: 'antd.InputItem',
                children: [{
                    component: 'FA',
                    name: 'user'
                }],
                placeholder: '请输入手机号',
                maxLength: 11,
                labelNumber: 2,
                clear: true,
                value: '{{data.form.mobile}}',
                onChange: "{{(v)=>$base.setState({'data.form.mobile': v})}}"
            }]
        }, {
            component: 'antd.WhiteSpace',
            size: 'xl',
        }, {
            component: 'antd.List',
            children: [{
                component: 'antd.InputItem',
                labelNumber: 2,
                type: `{{data.isShowPassword ?'':'Password'}}`,
                maxLength: 20,
                onExtraClick: "{{(v)=>$base.setState({'data.isShowPassword': !data.isShowPassword})}}",
                placeholder: '请输入密码',
                onVirtualKeyboardConfirm: "{{(v)=>$base.setState({'data.form.password': v})}}",
                onChange: "{{(v)=>$base.setState({'data.form.password': v})}}",
                value: '{{data.form.password}}',
                children: [{
                    component: 'FA',
                    name: 'key'
                }],
                extra: [{
                    component: 'FA',
                    name: `{{data.isShowPassword ? 'eye': 'eye-slash'}}`
                }]

            }]
        }, {
            component: 'antd.WhiteSpace',
            size: 'xl',
        }, {
            component: 'antd.Button',
            type: 'primary',
            children: '登录',
            onClick: '{{$login}}'
        }, {
            component: 'antd.WhiteSpace'
        }, {
            component: 'div',
            className: 'sign-in-forgetOrRegister',
            children: [{
                component: 'a',
                href: '#',
                children: '忘记密码',
                onClick: '{{$goForgetPassword}}'
            }, '|', {
                component: 'a',
                href: '#',
                children: '新用户注册',
                onClick: '{{$goRegister}}'
            }]
        }]
    }, {
        component: 'div',
        className: 'sign-in-footer',
        children: '支持电话：400-0000-000'
    }]
}