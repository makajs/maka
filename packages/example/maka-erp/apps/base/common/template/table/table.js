import textColumn from './column/textColumn'
import isSelectedColumn from './column/isSelectedColumn'
import linkColumn from './column/linkColumn'
import sequenceColumn from './column/sequenceColumn'
import customColumn from './column/customColumn'
import inputColumn from './column/inputColumn'
import numberColumn from './column/numberColumn'
import checkboxColumn from './column/checkboxColumn'
import datePickerColumn from './column/datePickerColumn'
import monthPickerColumn from './column/monthPickerColumn'
import selectColumn from './column/selectColumn'
import delColumn from './column/delColumn'
import addAndDelColumn from './column/addAndDelColumn'


export default function table({ 
    tableName = 'table', bindPath = 'data.list', selectFieldName = 'isSelected',
    paginationPath = 'data.pagination', onPageChange = 'pageChanged',
    columns, component, enablePagination = true, pageSizeOptions = [10,20,50,100], 
    showSelectedCount = true, editClassNamePrefix, startEditIndex,editableColumnCount, ...ext 
}) {
    var ret = [{
        component: 'FDT.Table',
        headerHeight: 32,
        rowHeight: 32,
        rowsCount: `{{${bindPath}.length}}`,
        onColumnResizeEndCallback: `{{$tableHelper.onColumnResizeEndCallback('${tableName}',data)}}`,
        columnWidths: `{{data.other && data.other.${tableName}ColumnWidths}}`,
        columns: [],
        ...ext
    }]

    if (enablePagination) {
        ret.push({
            className: 'fdt-pagination',
            component: 'div',
            children: [{
                component: 'div',
                className: 'fdt-pagination-left',
                children: {
                    component: 'h3',
                    children: `{{'选中' + $tableHelper.getSelectedCount('${bindPath}', '${selectFieldName}') + '条'}}`,
                    _visible: showSelectedCount
                }
            }, {
                component: 'div',
                className: 'fdt-pagination-right',
                children: {
                    component: 'antd.Pagination',
                    showSizeChanger: true,
                    pageSize: `{{${paginationPath}.pageSize}}`,
                    current: `{{${paginationPath}.current}}`,
                    total: `{{${paginationPath}.total}}`,
                    onChange: `{{$${onPageChange}}}`,
                    onShowSizeChange: `{{$${onPageChange}}}`,
                    size:"small",
                    pageSizeOptions
                }
            }]
        })
    }

    columns.forEach(c => {
        let { type, ...other } = c,
            option = { ...other,  bindPath }, x
            option.editClassNamePrefix = editClassNamePrefix
            option.startEditIndex = startEditIndex
            option.editableColumnCount = editableColumnCount
    
        switch (type) {
            case 'sequence':
                x = sequenceColumn({...option, paginationPath})
                break;
            case 'isSelected':
                x = isSelectedColumn(option)
                break;
            case 'text':
                x = textColumn(option)
                break;
            case 'link':
                x = linkColumn(option)
                break;
            case 'input':
                x = inputColumn(option)
                break;
            case 'number':
                x = numberColumn(option)
                break;
            case 'checkbox':
                x = checkboxColumn(option)
                break;
            case 'datePicker':
                x = datePickerColumn(option)
                break;
            case 'monthPicker':
                x = monthPickerColumn(option)
                break;
            case 'select':
                x = selectColumn(option)
                break;
            case 'del':
                x = delColumn(option)
                break;
            case 'addAndDel':
                x = addAndDelColumn(option)
                break;
            case 'custom':
                x = customColumn(option)
                break;
            default:
                x = c
                break;
        }
        ret[0].columns.push(x)
    })
    return ret
}
