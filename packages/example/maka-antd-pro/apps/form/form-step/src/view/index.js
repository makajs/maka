import step1 from './step1'
import step2 from './step2'
import step3 from './step3'

export default {
    component: 'antd.Card',
    bordered: false,
    children: [{
        component: 'antd.Steps',
        current: '{{data.currentStep}}',
        className: `{{$styles('steps')}}`,
        children: [{
            component: 'antd.Steps.Step',
            title: '填写转账信息'
        }, {
            component: 'antd.Steps.Step',
            title: '确认转账信息'
        }, {
            component: 'antd.Steps.Step',
            title: '完成'
        }],

    }, step1, step2, step3]
}