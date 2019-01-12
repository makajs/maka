export default {
    component: 'div',
    className: 'voucher set-bom',
    onKeyDown: `{{$keyboardHelper.keyDown('set-bom-edit')}}`,
    children: [{
        component: 'div',
        className: 'voucher-header',
        children: [{
            component: 'div',
            className: 'voucher-header-left',
            children: [{
                component: 'antd.Button.Group',
                children: [{
                    component: 'antd.Button',
                    className: 'icon-button-softly',
                    icon: 'left',
                    title: '上一张',
                    onClick: '{{$prev}}'
                }, {
                    component: 'antd.Button',
                    className: 'icon-button-softly',
                    icon: 'right',
                    title: '下一张',
                    onClick: '{{$next}}'
                }]
            }]
        }, {
            component: 'div',
            className: 'voucher-header-center'
        }, {
            component: 'div',
            className: 'voucher-header-right',
            children: [
                { component: 'antd.Button', className: 'button-showy', onClick: '{{$save}}', children: '保存' },
                { component: 'antd.Button', className: 'button-bluesky', onClick: '{{$add}}', children: '新增' },
            ]
        }]
    }, {
        component: 'tpl.Form',
        className: 'voucher-form',
        editClassNamePrefix: 'set-bom-edit',
        startEditIndex: 0,
        children: [
            { type: 'input', title: '编码', bindPath: 'data.form.code', editIndex: 1, required: true },
            { type: 'select', title: '物料编码', bindPath: 'data.form.materiel', editIndex: 2, required: true, onLoadOption: '{{$loadMateriel}}', titleGetter: '{{(v)=> v && v.code}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'input', title: '物料名称', bindPath: 'data.form.materiel.name', disabled: true },
            { type: 'input', title: '物料规格', bindPath: 'data.form.materiel.spec', disabled: true },
            { type: 'input', title: '物料属性', bindPath: 'data.form.materiel.prop', disabled: true },
            { type: 'input', title: '单位', bindPath: 'data.form.materiel.uom.name', disabled: true },
            { type: 'select', title: '工艺', bindPath: 'data.form.technic', editIndex: 3, required: true, onLoadOption: '{{$loadTechnic}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'number', title: '数量', bindPath: 'data.form.amount', editIndex: 4, required: true, min: 0 },
            { type: 'number', title: '成品率', bindPath: 'data.form.yield', editIndex: 5, required: true, min: 0, max: 100 },
            { type: 'checkbox', title: '虚拟层', bindPath: 'data.form.isVirtual', editIndex: 6 },
            { type: 'select', title: '使用状态', bindPath: 'data.form.status', editIndex: 7, onLoadOption: '{{$loadStatus}}' },
        ]
    }, {
        component: 'tpl.Table',
        bindPath: 'data.form.details',
        autoHeight: false,
        enablePagination: false,
        editClassNamePrefix: 'set-bom-edit',
        startEditIndex: 7,
        editableColumnCount: 5,
        columns: [
            { type: 'sequence' },
            { type: 'select', title: '物料编码', bindField: 'materiel', editIndex: 1, required: true, fixed: true, flexGrow: 1, onLoadOption: '{{$loadMateriel}}', titleGetter: '{{(v)=> v && v.code}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'text', title: '物料名称', bindField: 'materiel.name', width: 100, fixed: true, flexGrow: 1 },
            { type: 'text', title: '规格型号', bindField: 'materiel.spec', width: 100, flexGrow: 1 },
            { type: 'text', title: '物料属性', bindField: 'materiel.prop', width: 100, flexGrow: 1 },
            { type: 'text', title: '单位', bindField: 'materiel.uom.name', width: 150, flexGrow: 1 },
            { type: 'number', title: '用量', bindField: 'amount', editIndex: 2, width: 100, required: true, min: 0, },
            { type: 'number', title: '损耗率', bindField: 'lossRate', editIndex: 3, width: 100, required: true, min: 0, max: 100 },
            { type: 'select', title: '工序号', bindField: 'technicDetail', editIndex: 4, required: true, onLoadOption: '{{$loadTechnicDetail}}', titleGetter: '{{(v)=> v && v.code}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'text', title: '工序名称', bindField: 'technicDetail.name' },
            { type: 'number', title: '提前期偏置', bindField: 'leadTimeOffset', editIndex: 5, width: 100 },
            { type: 'addAndDel', onHeaderAddRow: '{{$headerAddRow}}', onAddRow: '{{$addRow(row.rowIndex)}}', onDelRow: '{{$delRow(row.rowIndex)}}' },
        ]
    }, {
        component: 'tpl.Form',
        className: 'voucher-form',
        children: [
            { type: 'datePicker', title: '创建日期', bindPath: 'data.form.createTime', disabled: true },
            { type: 'input', title: '最后更新人', bindPath: 'data.form.updateUserName', disabled: true, },
            { type: 'datePicker', title: '最后更新日期', bindPath: 'data.form.updateTime', disabled: true },
            { type: 'input', title: '审核人', bindPath: 'data.form.auditUserName', disabled: true, },
            { type: 'datePicker', title: '审核日期', bindPath: 'data.form.datePicker', disabled: true },
        ]
    }]
}