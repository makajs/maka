const formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
}

const Step0 = {
    component: 'Fragment',
    _visible: '{{data.currentStep === 0}}',
    children: [{
        component: 'antd.Form.Item',
        key: 'name',
        ...formLayout,
        label: '规则名称',
        children: {
            component: 'antd.Input',
            placeholder: '请输入',
            _decorator: `{{$getFieldDecorator('name',{
                rules: [{ required: true, message: '请输入规则名称！' }],
                initialValue: data.form.name,
            })}}`
        }
    }, {
        component: 'antd.Form.Item',
        key: 'desc',
        ...formLayout,
        label: '规则描述',
        children: {
            component: 'antd.Input.TextArea',
            rows: 4,
            placeholder: '请输入至少五个字符',
            _decorator: `{{$getFieldDecorator('desc',{
                rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5  }],
                initialValue: data.form.desc,
            })}}`
        }
    }]
}

const Step1 = {
    component: 'Fragment',
    _visible: '{{data.currentStep === 1}}',
    children: [{
        component: 'antd.Form.Item',
        key: 'target',
        ...formLayout,
        label: '监控对象',
        children: {
            component: 'antd.Select',
            style: { width: '100%' },
            children: [{
                component: 'antd.Select.Option',
                value: '0',
                children: '表一'
            }, {
                component: 'antd.Select.Option',
                value: '1',
                children: '表二'
            }],
            _decorator: `{{$getFieldDecorator('target',{
                initialValue: data.form.target
            })}}`
        }
    }, {
        component: 'antd.Form.Item',
        key: 'template',
        ...formLayout,
        label: '规则模板',
        children: {
            component: 'antd.Select',
            style: { width: '100%' },
            children: [{
                component: 'antd.Select.Option',
                value: '0',
                children: '规则模板一'
            }, {
                component: 'antd.Select.Option',
                value: '1',
                children: '规则模板二'
            }],
            _decorator: `{{$getFieldDecorator('template',{
                initialValue: data.form.template
            })}}`
        }
    }, {
        component: 'antd.Form.Item',
        key: 'type',
        ...formLayout,
        label: '规则类型',
        children: {
            component: 'antd.Radio.Group',
            style: { width: '100%' },
            children: [{
                component: 'antd.Radio',
                value: '0',
                children: '强'
            }, {
                component: 'antd.Radio',
                value: '1',
                children: '弱'
            }],
            _decorator: `{{$getFieldDecorator('type',{
                initialValue: data.form.type
            })}}`
        }
    }]
}

const Step2 = {
    component: 'Fragment',
    _visible: '{{data.currentStep === 2}}',
    children: [{
        component: 'antd.Form.Item',
        key: 'time',
        ...formLayout,
        label: '开始时间',
        children: {
            component: 'antd.DatePicker',
            style: { width: '100%' },
            showTime: true,
            format: "YYYY-MM-DD HH:mm:ss",
            placeholder: "选择开始时间",
            _decorator: `{{data.currentStep === 2 && $getFieldDecorator('time',{
                initialValue: data.form.time,
                rules: [{ required: true, message: '请选择开始时间！' }],   
            })}}`
        }
    }, {
        component: 'antd.Form.Item',
        key: 'frequency',
        ...formLayout,
        label: '调度周期',
        children: {
            component: 'antd.Select',
            style: { width: '100%' },
            children: [{
                component: 'antd.Select.Option',
                value: 'month',
                children: '月'
            }, {
                component: 'antd.Select.Option',
                value: 'week',
                children: '周'
            }],
            _decorator: `{{$getFieldDecorator('frequency',{
                initialValue: data.form.frequency,
            })}}`
        }
    }]
}

const Footer = {
    component: 'div',
    className: 'ant-modal-footer',
    children: [{
        component: 'antd.Button',
        style: { float: 'left' },
        onClick: '{{$prev}}',
        children: '上一步',
        _visible: '{{data.currentStep === 1 || data.currentStep === 2}}'
    }, {
        component: 'antd.Button',
        onClick: '{{$cancel}}',
        children: '取消',
        
    }, {
        component: 'antd.Button',
        type: 'primary',
        onClick: '{{$next}}',
        children: `{{data.currentStep === 2? '完成': '下一步'}}`,
    }]
}

export default {
    component: 'Fragment',
    children: [{
        component: 'antd.Steps',
        style: { marginBottom: 28 },
        size: "small",
        current: '{{data.currentStep}}',
        children: [{
            component: 'antd.Steps.Step',
            title: '基本信息'
        }, {
            component: 'antd.Steps.Step',
            title: '配置规则属性'
        }, {
            component: 'antd.Steps.Step',
            title: '设定调度周期'
        }]
    }, Step0, Step1, Step2, Footer]
}