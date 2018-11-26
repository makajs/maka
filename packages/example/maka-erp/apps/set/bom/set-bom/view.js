export default {
    component: 'div',
    className: 'voucher set-bom',
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
        children: [
            { type: 'input', title: '编码', bindPath: 'data.form.code', required: true },
            { type: 'select', title: '物料编码', bindPath: 'data.form.materiel', required: true, onLoadOption: '{{$loadMateriel}}', titleGetter: '{{(v)=> v && v.code}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'input', title: '物料名称', bindPath: 'data.form.materiel.name', disabled: true },
            { type: 'input', title: '物料规格', bindPath: 'data.form.materiel.spec', disabled: true },
            { type: 'input', title: '物料属性', bindPath: 'data.form.materiel.prop', disabled: true },
            { type: 'input', title: '单位', bindPath: 'data.form.materiel.uom.name', disabled: true },
            { type: 'select', title: '工艺', bindPath: 'data.form.technic', required: true, onLoadOption: '{{$loadTechnic}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'number', title: '数量', bindPath: 'data.form.amount', required: true, min: 0 },
            { type: 'number', title: '成品率', bindPath: 'data.form.yield', required: true, min: 0, max: 100 },
            { type: 'checkbox', title: '虚拟层', bindPath: 'data.form.isVirtual' },
            { type: 'select', title: '使用状态', bindPath: 'data.form.status', onLoadOption: '{{$loadStatus}}' },
        ]
    }, {
        component: 'tpl.Table',
        bindPath: 'data.form.details',
        enablePagination: false,
        columns: [
            { type: 'sequence' },
            { type: 'select', title: '物料编码', bindField: 'materiel', required: true, fixed: true, flexGrow: 1, onLoadOption: '{{$loadMateriel}}', titleGetter: '{{(v)=> v && v.code}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'text', title: '物料名称', bindField: 'materiel.name', width: 100, fixed: true, flexGrow: 1 },
            { type: 'text', title: '规格型号', bindField: 'materiel.spec', width: 100, flexGrow: 1 },
            { type: 'text', title: '物料属性', bindField: 'materiel.prop', width: 100, flexGrow: 1 },
            { type: 'text', title: '单位', bindField: 'materiel.uom.name', width: 150, flexGrow: 1 },
            { type: 'number', title: '用量', bindField: 'amount', width: 100, required: true, min: 0 },
            { type: 'number', title: '损耗率', bindField: 'lossRate', width: 100, required: true, min: 0, max: 100 },
            { type: 'select', title: '工序号', bindField: 'technicDetail', required: true, onLoadOption: '{{$loadTechnicDetail}}', titleGetter: '{{(v)=> v && v.code}}', displayGetter: `{{(v)=> v && '(' + v.code + ')' + v.name}}` },
            { type: 'text', title: '工序名称', bindField: 'technicDetail.name' },
            { type: 'number', title: '提前期偏置', bindField: 'leadTimeOffset', width: 100 },
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