const information = {
    component: 'div',
    className: `{{$styles('information')}}`,
    children: [{
        component: 'antd.Row',
        children: [{
            component: 'antd.Col',
            xs: 24, sm: 8,
            className: `{{$styles('label')}}`,
            children: '付款账户：'
        }, {
            component: 'antd.Col',
            xs: 24, sm: 16,
            children: '{{data.payAccount}}'
        }]
    }, {
        component: 'antd.Row',
        children: [{
            component: 'antd.Col',
            xs: 24, sm: 8,
            className: `{{$styles('label')}}`,
            children: '收款账户：'
        }, {
            component: 'antd.Col',
            xs: 24, sm: 16,
            children: '{{data.receiverAccount}}'
        }]
    }, {
        component: 'antd.Row',
        children: [{
            component: 'antd.Col',
            xs: 24, sm: 8,
            className: `{{$styles('label')}}`,
            children: '收款人姓名：'
        }, {
            component: 'antd.Col',
            xs: 24, sm: 16,
            children: '{{data.receiverName}}'
        }]
    }, {
        component: 'antd.Row',
        children: [{
            component: 'antd.Col',
            xs: 24, sm: 8,
            className: `{{$styles('label')}}`,
            children: '转账金额：'
        }, {
            component: 'antd.Col',
            xs: 24, sm: 16,
            children: [{
                component: 'span',
                className: `{{$styles('money')}}`,
                children: '{{data.amount}}'
            }, '元']
        }]
    }]
}

const actions = [{
    component: 'antd.Button',
    type: 'primary',
    onClick: '{{$finish}}',
    children: '再转一笔'
}, {
    component: 'antd.Button',
    children: '查看账单'
}]

export default {
    component: 'antdpro.Result',
    type: "success",
    title: "操作成功",
    description: "预计两小时内到账",
    extra: information,
    actions: actions,
    className: `{{$styles('result')}}`,
    _visible: '{{data.currentStep === 2}}'
}