import { actionMixin } from 'maka'

@actionMixin('base', 'i18n', 'lodash', 'nzh', 'message')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.index = 0
    }

    styles = (suffix) => `form-advanced-${suffix}`

    getFieldValue = (...args) => {
        return this.component.props.form.getFieldValue(...args)
    }

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    fieldChange = (fieldName, key) => e => {
        var table = this.base.gs('data.table')
        var hitIndex = table.findIndex(item => item.key === key)
        if (hitIndex != -1) {
            this.base.ss({
                [`data.table.${hitIndex}.${fieldName}`]: e.target.value
            })
        }
    }


    toggleEditable = (key) => (e, isCancel) => {
        e.preventDefault()
        var table = this.base.gs('data.table')
        var hitIndex = table.findIndex(item => item.key === key)
        var editable = this.base.gs(`data.table.${hitIndex}.editable`)

        if (hitIndex == -1) return

        if (editable) {
            isCancel && this.base.ss({
                [`data.table.${hitIndex}`]: this.base.gs(`data.table.${hitIndex}._origin`),
                [`data.table.${hitIndex}.editable`]: !editable,
            })
            !isCancel && this.base.ss({
                [`data.table.${hitIndex}.editable`]: !editable,
            })
        }
        else {
            this.base.ss({
                [`data.table.${hitIndex}.editable`]: !editable,
                [`data.table.${hitIndex}._origin`]: this.base.gs(`data.table.${hitIndex}`)
            })
        }
    }

    cancelRow = (key) => (e) => {
        this.toggleEditable(key)(e, true)
    }

    removeRow = (key) => (e) => {
        e.preventDefault()
        var table = this.base.gs('data.table')
        this.base.ss({
            'data.table': table.filter(item => item.key !== key)
        })
    }

    newRow = (e) => {
        var table = this.base.gs('data.table')
        table.push({
            key: `NEW_TEMP_ID_${this.index}`,
            workId: '',
            name: '',
            department: '',
            editable: true,
            isNew: true,
        });
        this.index += 1;
        this.base.ss({
            'data.table': table
        })
    }

    saveRow = (key) => (e) => {
        e.persist()
        var table = this.base.gs('data.table')
        var hitIndex = table.findIndex(item => item.key === key)

        if (hitIndex == -1) return

        var row = this.base.gs(`data.table.${hitIndex}`)
        if (!row.workId || !row.name || !row.department) {
            this.message.error('请填写完整成员信息。')
            e.target.focus()
            return
        }
        delete row.isNew
        this.toggleEditable(key)(e, false)

    }

    validate = () => {
        const { validateFieldsAndScroll } = this.component.props.form
        validateFieldsAndScroll((error, values) => {
            if (!error) {
                //webapi
            }
        })
    }

    scrollToField = fieldKey => () => {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
        if (labelNode) {
            labelNode.scrollIntoView(true)
        }
    }

    getErrors = () => {
        const { getFieldsError } = this.component.props.form
        const errors = getFieldsError()
        const errorCount = Object.keys(errors).filter(key => errors[key]).length
        if (!errors || errorCount === 0) {
            return []
        }
        return Object.keys(errors).map(key => ({ key, value: errors[key] }))
    }

    getErrorCount = () => {
        const { getFieldsError } = this.component.props.form
        const errors = getFieldsError()
        const errorCount = Object.keys(errors).filter(key => errors[key]).length
        return !errors ? 0 : errorCount
    }
}
