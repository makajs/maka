import { actionMixin } from 'maka'

@actionMixin('base')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = (suffix) => `list-query-${suffix}`

    getFieldValue = (...args) => this.component.props.form.getFieldValue(...args)

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    next = () => {
        const { form } = this.component.props

        form.validateFields((err, values) => {
            if (err) return

            if (this.base.gs('data.currentStep') == 2) {
                this.component.props.modalOk && this.component.props.modalOk({ result: true })
            }
            this.base.ss({
                'data.form': { ...this.base.gs('data.form'), ...values },
                'data.currentStep': this.base.gs('data.currentStep') + 1
            })

           
        })
    }

    prev = () => {
        var values = this.component.props.form.getFieldsValue()
        this.base.ss({
            'data.form': { ...this.base.gs('data.form'), ...values },
            'data.currentStep': this.base.gs('data.currentStep') - 1
        })
    }

    cancel = () => {
        this.component.props.modalCancel && this.component.props.modalCancel()
    }

}
