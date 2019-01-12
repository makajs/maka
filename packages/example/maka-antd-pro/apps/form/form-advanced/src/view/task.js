const Row1 = {
    component: 'antd.Row',
    gutter: 16,
    children: [{
        component: 'antd.Col',
        lg: 6, md: 12, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.name2}}',
            children: {
                component: 'antd.Input',
                placeholder: '请输入',
                _decorator: `{{$getFieldDecorator('name2',{
                    rules:[{required:true, message: '请输入'}]
                })}}`
            }
        }
    }, {
        component: 'antd.Col',
        xl: { span: 6, offset: 2 }, lg: { span: 8 }, md: { span: 12 }, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.url2}}',
            children: {
                component: 'antd.Input',
                placeholder: '请输入',
                _decorator: `{{$getFieldDecorator('url2',{
                    rules:[{required:true, message: '请输入'}]
                })}}`
            }
        }
    }, {
        component: 'antd.Col',
        xl: { span: 8, offset: 2 }, lg: { span: 10 }, md: { span: 24 }, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.owner2}}',
            children: {
                component: 'antd.Select',
                placeholder: '请选择管理员',
                _decorator: `{{$getFieldDecorator('owner2',{
                    rules:[{required:true, message: '请选择管理员'}]
                })}}`,
                children: [{
                    component: 'antd.Select.Option',
                    value: 'xiao',
                    children: '付晓晓'
                }, {
                    component: 'antd.Select.Option',
                    value: 'mao',
                    children: '周毛毛'
                }]
            }
        }
    }]
}

const Row2 = {
    component: 'antd.Row',
    gutter: 16,
    children: [{
        component: 'antd.Col',
        lg: 6, md: 12, sm: 24,
        children: [{
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.approver2}}',
            children: {
                component: 'antd.Select',
                placeholder: '请选择审批员',
                _decorator: `{{$getFieldDecorator('approver2',{
                    rules: [{ required: true, message: '请选择审批员' }],
                })}}`,
                children: [{
                    component: 'antd.Select.Option',
                    value: 'xiao',
                    children: '付晓晓'
                }, {
                    component: 'antd.Select.Option',
                    value: 'mao',
                    children: '周毛毛'
                }]
            }
        }]
    }, {
        component: 'antd.Col',
        xl: { span: 6, offset: 2 }, lg: { span: 8 }, md: { span: 12 }, sm: 24,
        children: [{
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.dateRange2}}',
            children: {
                component: 'antd.TimePicker',
                placeholder: '提醒时间',
                style: { width: '100%' },
                getPopupContainer: `{{trigger => trigger.parentNode}}`,
                _decorator: `{{$getFieldDecorator('dateRange2',{
                    rules: [{ required: true, message: '请输入' }],
                })}}`,
            }
        }]
    }, {
        component: 'antd.Col',
        xl: { span: 8, offset: 2 }, lg: { span: 10 }, md: { span: 24 }, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.type2}}',
            children: {
                component: 'antd.Select',
                placeholder: '请选择仓库类型',
                children: [{
                    component: 'antd.Select.Option',
                    value: 'private',
                    children: '私密'
                }, {
                    component: 'antd.Select.Option',
                    value: 'public',
                    children: '公开'
                }],
                _decorator: `{{$getFieldDecorator('type2',{
                    rules: [{ required: true, message: '请选择仓库类型' }],
                })}}`,
            }
        }
    }]
}

export default {
    component: 'antd.Card',
    title: '任务管理',
    className: `{{$styles('card')}}`,
    bordered: false,
    children: [{
        component: 'antd.Form',
        layout: "vertical",
        hideRequiredMark: true,
        children: [Row1, Row2]

    }]
}