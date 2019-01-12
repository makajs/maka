import { actionMixin } from 'maka'

@actionMixin('base', 'i18n')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)

    }

    styles = suffix => `account-setting-base-view-${suffix}`

    getFieldValue = (...args) => {
        return this.component.props.form.getFieldValue(...args)
    }

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    submitHandler = e => {
        const { form } = this.component.props
        debugger
        e.preventDefault()
        form.validateFieldsAndScroll((err, values) => {
            debugger
            if (!err) {
                //todo
            }
        });
    };


}