import { actionMixin } from 'maka'

@actionMixin('base', 'i18n')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }


    getFieldValue = (...args) => {
        return this.component.props.form.getFieldValue(...args)
    }

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    handleSubmit = e => {
        const { form } = this.component.props
        e.preventDefault()
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
            }
        })
    }
}
