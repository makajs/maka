import { actionMixin, createAppElement } from 'maka'

@actionMixin('base', 'moment', 'modal')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = (suffix) => `list-query-${suffix}`

    getFieldValue = (...args) => this.component.props.form.getFieldValue(...args)

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    search = e => {
        e.preventDefault()
        const { form } = this.component.props

        form.validateFields((err, fieldsValue) => {
            if (err) return

            const values = {
                ...fieldsValue,
                updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
            }

            this.base.ss({
                'data.form': values
            })

            //webapi
        })
    }


    reset = () => {
        const { form } = this.component.props

        form.resetFields()
        this.base.ss({
            'data.form': {},
        });

        //webapi
    }

    toggleForm = () => {
        this.base.ss({
            'data.expand': !this.base.gs('data.expand')
        })
    }

    getSelectedRowKeys = () => {
        return this.base.gs('data.selectedRowKeys') || []
    }

    clearSelectedKeys = () => {
        return this.base.ss({ 'data.selectedRowKeys': [] })
    }

    selectRowsChange = (rowKeys, rows) => {
        this.base.ss({
            'data.selectedRowKeys': rowKeys,
            'data.selectedRows': rows
        })
    }

    tableChange = (pagination, filtersArg, sorter) => {
        var formValues = this.base.gs('data.form')

        const getValue = obj =>
            Object.keys(obj)
                .map(key => obj[key])
                .join(',')

        const filters = Object.keys(filtersArg).reduce((obj, key) => {
            const newObj = { ...obj }
            newObj[key] = getValue(filtersArg[key])
            return newObj
        }, {})

        const params = {
            currentPage: pagination.current,
            pageSize: pagination.pageSize,
            ...formValues,
            ...filters,
        }

        if (sorter.field) {
            params.sorter = `${sorter.field}_${sorter.order}`
        }

        //webapi
    }

    sum = (dataIndex) => {
        var data = this.base.gs('data')
        return data.selectedRows ? data.selectedRows.reduce((sum, val) => sum + parseFloat(val[dataIndex], 10), 0) : 0
    }

    setting = (row) => async () => {

        var ret = await this.modal.show( {
            title: '规则配置',
            destroyOnClose:true,
            children: createAppElement('list-query-setting', {}),
            width:640,
            bodyStyle:{ padding: '32px 0px 0px' },
            wrapClassName: this.styles('settingModal'),
            footer: null
        })

        if (ret) {
         
        }
      
        debugger
    }
}