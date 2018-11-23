
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.option = option
    }


    onColumnResizeEndCallback = (tableName, data) => (newColumnWidth, columnKey) => {
        var columnWidths = data.other[`${tableName}ColumnWidths`] || {}
        this.base.setState({
            [`data.other.${tableName}ColumnWidths`]: {
                ...columnWidths,
                [columnKey]: newColumnWidth
            }
        })
    }


    isSelectAll = (bindPath, selectFieldName = 'isSelected') => {
        
        const lst = this.base.gs(bindPath)
        if (!lst || lst.length == 0)
            return false

        return lst.every(o => o[selectFieldName])
    }

    selectAll = (bindPath, selectFieldName = 'isSelected') => (e) => {
        var lst = this.base.gs(bindPath)

        if (!lst || lst.length == 0)
            return

        var json = {}
        for (let i = 0; i < lst.length; i++) {
            json[`${bindPath}.${i}.${selectFieldName}`] = e.target.checked
        }
        this.base.setState(json)
    }


    getSelectedCount = (bindPath, selectFieldName = 'isSelected') => {
        if (!bindPath)
            return

        var lst = this.base.gs(bindPath)

        if (!lst || lst.length == 0)
            return 0

        var ret = lst.filter(o => !!o[selectFieldName]).length

        return ret
    }


}