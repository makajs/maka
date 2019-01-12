const Row1 = {
    component: 'antd.Row',
    gutter: 16,
    children: [{
        component: 'antd.Col',
        lg: 6, md: 12, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.name}}',
            children: {
                component: 'antd.Input',
                placeholder: '请输入仓库名称',
                _decorator: `{{$getFieldDecorator('name',{
                    rules: [{ required: true, message: '请输入仓库名称' }],
                })}}`
            }
        }
    }, {
        component: 'antd.Col',
        xl: { span: 6, offset: 2 }, lg: { span: 8 }, md: { span: 12 }, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.url}}',
            children: {
                component: 'antd.Input',
                style: { width: '100%' },
                addonBefore: "http://",
                addonAfter: ".com",
                placeholder: "请输入",
                _decorator: `{{$getFieldDecorator('url',{
                    rules: [{ required: true, message: '请选择' }],
                })}}`
            }
        }
    }, {
        component: 'antd.Col',
        xl: { span: 8, offset: 2 }, lg: { span: 10 }, md: { span: 24 }, sm: 24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.owner}}',
            children: {
                component: 'antd.Select',
                placeholder: '请选择管理员',
                _decorator: `{{$getFieldDecorator('owner',{
                    rules: [{ required: true, message: '请选择' }],
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
            label: '{{data.fieldLabels.approver}}',
            children: {
                component: 'antd.Select',
                placeholder: '请选择审批员',
                _decorator: `{{$getFieldDecorator('approver',{
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
            label: '{{data.fieldLabels.dateRange}}',
            children: {
                component: 'antd.DatePicker.RangePicker',
                placeholder: ['开始日期', '结束日期'],
                style: { width: '100%' },
                _decorator: `{{$getFieldDecorator('dateRange',{
                    rules: [{ required: true, message: '请选择生效日期' }],
                })}}`,
            }
        }]
    }, {
        component: 'antd.Col',
        xl:{ span: 8, offset: 2 }, lg:{ span: 10 }, md:{ span: 24 }, sm:24,
        children: {
            component: 'antd.Form.Item',
            label: '{{data.fieldLabels.type}}',
            children: {
                component: 'antd.Select',
                placeholder: '请选择仓库类型',
                _decorator: `{{$getFieldDecorator('type',{
                    rules: [{ required: true, message: '请选择仓库类型' }],
                })}}`,
                children:[{
                    component: 'antd.Select.Option',
                    value: 'private',
                    children: '私密'
                },{
                    component: 'antd.Select.Option',
                    value: 'public',
                    children: '公开'
                }]
            }
        }
    }]
}

export default {
    component: 'antd.Card',
    title: '仓库管理',
    className: `{{$styles('card')}}`,
    borderd: false,
    children: [{
        component: 'antd.Form',
        layout: 'vertical',
        hideRequiredMark: true,
        children: [Row1, Row2]
    }]
}