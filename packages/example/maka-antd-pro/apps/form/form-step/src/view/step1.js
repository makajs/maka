const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
}


export default {
    component: 'Fragment',
    _visible: `{{data.currentStep === 0 }}`,
    children: [{
        component: 'antd.Form',
        layout: 'horizontal',
        className: `{{$styles('stepForm')}}`,
        hideRequiredMark: true,
        children: [{
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: '付款账户',
            children: {
                component: 'antd.Select',
                placeholder: 'test@example.com',
                children: {
                    component: 'antd.Select.Option',
                    value: 'ant-design@alipay.com',
                    children: 'ant-design@alipay.com',
                },
                _decorator: `{{$getFieldDecorator('payAccount',{
                    initialValue: data.payAccount,
                    rules: [{ required: true, message: '请选择付款账户' }],
                })}}`
            }
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: '收款账户',
            children: {
                component: 'antd.Input.Group',
                compact: true,
                children: [{
                    component: 'antd.Select',
                    defaultValue: 'alipay',
                    style: { width: 100 },
                    children: [{
                        component: 'antd.Select.Option',
                        value: 'alipay',
                        children: '支付宝',
                    }, {
                        component: 'antd.Select.Option',
                        value: 'bank',
                        children: '银行账户',
                    }]
                }, {
                    component: 'antd.Input',
                    style: { width: 'calc(100% - 100px)' },
                    placeholder: "test@example.com",
                    _decorator: `{{$getFieldDecorator('receiverAccount',{
                        initialValue: data.receiverAccount,
                        rules: [
                            { required: true, message: '请输入收款人账户' },
                            { type: 'email', message: '账户名应为邮箱格式' },
                        ],
                    })}}`
                }]

            }
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: '收款人姓名',
            children: {
                component: 'antd.Input',
                placeholder: "请输入收款人姓名",
                _decorator: `{{$getFieldDecorator('receiverName',{
                    initialValue: data.receiverName,
                    rules: [{ required: true, message: '请输入收款人姓名' }],
                })}}`
            }
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: '转账金额',
            children: {
                component: 'antd.Input',
                prefix: "￥",
                placeholder: "请输入转账金额",
                _decorator: `{{$getFieldDecorator('amount',{
                    initialValue: data.amount,
                    rules: [{ required: true, message: '请输入转账金额' }],
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
            label: '',
            children: {
                component: 'antd.Button',
                type: 'primary',
                onClick: '{{$validate}}',
                children: '下一步'
            }
        }]
    },{
        component: 'antd.Divider'
    },{
        component: 'div',
        className: `{{$styles('desc')}}`,
        children:[{
            component: 'h3',
            children: '说明'
        },{
            component: 'h4',
            children: '转账到支付宝账户'
        },{
            component: 'p',
            children: '如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。'
        },{
            component: 'h4',
            children: '转账到银行卡'
        },{
            component: 'p',
            children: '如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。'
        }]
    }]
}