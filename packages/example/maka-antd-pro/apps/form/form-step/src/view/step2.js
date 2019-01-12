const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
}

export default {
    component: 'antd.Form',
    layout: 'horizontal',
    className: `{{$styles('stepForm')}}`,
    _visible: `{{data.currentStep === 1}}`,
    children: [{
        component: 'antd.Alert',
        closable: true,
        showIcon: true,
        message: "确认转账后，资金将直接打入对方账户，无法退回。",
        style: { marginBottom: 24 },
    }, {
        component: 'antd.Form.Item',
        ...formItemLayout,
        className: `{{$styles('stepFormText')}}`,
        label: '付款账户',
        children: '{{data.payAccount}}'
    }, {
        component: 'antd.Form.Item',
        ...formItemLayout,
        className: `{{$styles('stepFormText')}}`,
        label: '收款账户',
        children: '{{data.receiverAccount}}'
    }, {
        component: 'antd.Form.Item',
        ...formItemLayout,
        className: `{{$styles('stepFormText')}}`,
        label: '收款人姓名',
        children: '{{data.receiverName}}'
    }, {
        component: 'antd.Form.Item',
        ...formItemLayout,
        className: `{{$styles('stepFormText')}}`,
        label: '转账金额',
        children: [{
            component: 'span',
            className: `{{$styles('money')}}`,
            children: '{{data.amount}}',
        }, {
            component: 'span',
            className: `{{$styles('uppercase')}}`,
            children: `{{'(' + $nzh.toMoney(data.amount) + ')'}}`,
        }]
    }, {
        component: 'antd.Divider',
        style: { margin: '24px 0' },
    }, {
        component: 'antd.Form.Item',
        ...formItemLayout,
        label: "支付密码",
        required: false,
        children: {
            component: 'antd.Input',
            type: "password",
            autoComplete: "off",
            style: { width: '80%' },
            _decorator: `{{$getFieldDecorator('password',{
                initialValue: '123456',
                rules: [
                {
                    required: true,
                    message: '需要支付密码才能进行支付',
                },
                ],
            })}}`
        }
    }, {
        component: 'antd.Form.Item',
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
            },
        },
        label: "",
        children: [{
            component: 'antd.Button',
            tpye: 'primary',
            onClick: '{{$validate}}',
            children: '提交'
        }, {
            component: 'antd.Button',
            onClick: '{{$prev}}',
            style: { marginLeft: 8 },
            children: '上一步'
        }]
    }]
}