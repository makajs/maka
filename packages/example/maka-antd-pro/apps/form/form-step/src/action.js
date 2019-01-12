import { actionMixin } from 'maka'

@actionMixin('base', 'i18n', 'lodash', 'nzh')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.validate = this.lodash.throttle(this.validate, 200)
        this.prev = this.lodash.throttle(this.prev, 200)
    }

    styles = (suffix) => `form-step-${suffix}`

    getFieldValue = (...args) => this.component.props.form.getFieldValue(...args)

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    handleSubmit = e => {
        const { form } = this.component.props
        e.preventDefault()
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
            }
        })
    }

    validate = () => {
        var data = this.base.gs('data')
        const { validateFields } = this.component.props.form

        validateFields((err, values) => {
            if (!err) {
                this.base.ss({
                    'data': {
                        ...data,
                        ...values,
                        currentStep: data.currentStep + 1
                    }
                })
            }
        })
    }

    prev = () => {
        var currentStep = this.base.gs('data.currentStep')
        this.base.ss({ 'data.currentStep': currentStep - 1 })
    }

    finish = () => {
        this.base.ss({ 'data.currentStep': 0 })
    }
}
