import { actionMixin, createAppElement } from 'maka'

@actionMixin('base', 'moment', 'classnames')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = (suffix) => `list-search-article-${suffix}`

    getFieldValue = (...args) => this.component.props.form.getFieldValue(...args)

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    setOwner = () => {
        const { form } = this.component.props
        form.setFieldsValue({
            owner: ['wzj']
        })
    }

}