export default {
    component: 'div',
    className: 'set-person',
    children:  [{
        component: 'antd.NavBar',
        className: 'set-person-navbar',
        onLeftClick: '{{$goBack}}',
        icon: {
            component: 'FA',
            name: 'angle-left',
            style: { fontSize: 32 }
        }, 
        children: '个人信息'
    },{
    //     component: 'tpl.Form',
    //     children: [
    //         { type: 'select', title: '所属部门',   bindPath: 'data.form.department', data: '{{$loadDepartment()}}', displayGetter: `{{(v)=>v && '(' + v.code + ')'+v.name}}` },
    //         { type: 'input', title: '姓名', required: true, bindPath: 'data.form.name' },
    //         { type: 'select', title: '性别',   bindPath: 'data.form.sex' },
    //         { type: 'datePicker', title: '生日', required: true, bindPath: 'data.form.birthday' },
    //         { type: 'number', title: '手机', required: true, bindPath: 'data.form.mobile' },
    //         { type: 'input', title: '地址', bindPath: 'data.form.address' },
    //     ]
    // },{
        component: 'antd.WhiteSpace'
    },{
        component: 'antd.List',
        children: [{ 
            component: 'antd.Picker', children: {
                component:'antd.List.Item',
                arrow:'horizontal',
                children: '所属部门' 
            },   
            value:'{{data.form.department}}',
            onChange:'{{(v)=>$base.ss("data.form.department",v)}}' 
        },{    
            component: 'antd.InputItem',
            children: '姓名', 
            value:'{{data.form.name}}', 
            onChange:'{{(v)=>$base.ss("data.form.name",v)}}'  
        },{    
            component: 'antd.Picker', children: {
                component:'antd.List.Item',
                arrow:'horizontal',
                children: '性别'
            },  
            value:'{{data.form.sex}}',
            onChange:'{{(v)=>$base.ss("data.form.sex",v)}}',
            cols:1 ,
            data:[{label:'男',value:'0'},{label:'女',value:'1'}] 
        },{ 
            component: 'antd.DatePicker', 
            mode:'date', 
            value:'{{data.form.birthday}}',  
            children: {
                component:'antd.List.Item',
                arrow:'horizontal',
                children: '生日' 
            },  onChange:'{{(v)=>$base.ss("data.form.birthday",v)}}'  
        },{ 
            component: 'antd.InputItem', 
            children: '手机', 
            value:'{{data.form.mobile}}',  
            onChange:'{{(v)=>$base.ss("data.form.mobile",v)}}'  
        },{ 
            component: 'antd.InputItem', 
            children: '地址', 
            value:'{{data.form.address}}', 
            onChange:'{{(v)=>$base.ss("data.form.address",v)}}' 
        }]
    },{ 
        component:'antd.List',
        _for:'(item,i) in data.form.list',
        renderHeader:{
            _function:'()',
            component:'span',
            children:'紧急联系人'
        },
        children:[
            { component: 'antd.InputItem', children:'姓名', value:'{{item.name}}', onChange:'{{$setItem(i,"name")}}'},
            { component: 'antd.InputItem', children:'手机', type:'number', value:'{{item.mobile}}', onChange:'{{$setItem(i,"mobile")}}', type: 'number'},
            { component: 'antd.InputItem', children:'地址', value:'{{item.address}}', onChange:'{{$setItem(i,"address")}}'},
            { component: 'antd.Button', type: 'ghost', size:'small',inline: true, children: '删除', onClick: '{{$deleteItem(i) }}'},
            { component: 'antd.Button', type: 'primary', size:'small', inline: true, children: '新增', onClick: '{{$addItem(i) }}'},
        ] 
    },
    {
        component:'antd.WingBlank',
        children:{
            component: 'antd.ImagePicker', 
            files: '{{data.form.files}}',
            onChange: '{{$filesOnChange}}',
            onImageClick: '{{(index, fs) => console.log(index, fs)}}',
            selectable: '{{data.form.files.length < 7}}',
            multiple: true,
        }

    },
    { component: 'antd.WhiteSpace' },
    { component: 'antd.Button', type: 'primary', children: '保存', onClick: '{{$save}}'},
    { component: 'antd.Button', type: 'ghost', children: '暂存', onClick: '{{$saveLocal}}'}
    ]
}