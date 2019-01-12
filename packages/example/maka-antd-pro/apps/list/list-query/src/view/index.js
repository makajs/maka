import Form from './form'
import StandardTable from './standard-table'

export default {
    component: 'Fragment',
    children: [{
        component: 'antd.Card',
        bordered: false,
        children: [{
            component: 'div',
            className: `{{$styles('tableList')}}`,
            children: [Form, StandardTable]
        }]
    }]

}