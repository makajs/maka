const Info = ({ title, value, bordered }) => {
    return {
        component: 'div',
        className: `{{$styles('headerInfo')}}`,
        children: [{
            component: 'span',
            children: title,
        }, {
            component: 'p',
            children: value,
        }, {
            component: 'em',
            _visible: bordered
        }]
    }
}

const extraContent = {
    component: 'div',
    className: `{{$styles('extraContent')}}`,
    children: [{
        component: 'antd.Radio.Group',
        defaultValue: 'all',
        children: [{
            component: 'antd.Radio.Button',
            value: 'all',
            children: '全部'
        }, {
            component: 'antd.Radio.Button',
            value: 'progress',
            children: '进行中'
        }, {
            component: 'antd.Radio.Button',
            value: 'waiting',
            children: '等待中'
        }]
    }, {
        component: 'antd.Input.Search',
        className: `{{$styles('extraContentSearch')}}`,
        placeholder: '请输入',

    }]
}

const MoreBtn = {
    component: 'antd.Dropdown',
    overlay: {
        component: 'antd.Menu',
        onClick: '{{({key}=>$editAndDelete(key,item))}',
        children: [{
            component: 'antd.Menu.Item',
            key: 'edit',
            children: '编辑'
        }, {
            component: 'antd.Menu.Item',
            key: 'delete',
            children: '删除'
        }]
    },
    children: {
        component: 'a',
        children: ['更多', {
            component: 'antd.Icon',
            type: 'down'
        }]
    }
}

const ListContent = {
    component: 'div',
    className: `{{$styles('listContent')}}`,
    children: [{
        component: 'div',
        className: `{{$styles('listContentItem')}}`,
        children: [{
            component: 'span',
            children: 'Owner'
        }, {
            component: 'p',
            children: '{{item.owner}}'
        }]
    }, {
        component: 'div',
        className: `{{$styles('listContentItem')}}`,
        children: [{
            component: 'span',
            children: '开始时间',
        }, {
            component: 'p',
            children: `{{$moment(item.createAt).format('YYYY-MM-DD HH:mm')}}`
        }]
    }, {
        component: 'div',
        className: `{{$styles('listContentItem')}}`,
        children: {
            component: 'antd.Progress',
            percent: '{{item.percent}}',
            status: '{{item.status}}',
            strokeWidth: 6,
            style: { width: 180 }
        }
    }]
}

export default {
    component: 'div',
    className: `{{$styles('standardList')}}`,
    children: [{
        component: 'antd.Card',
        bordered: false,
        children: [{
            component: 'antd.Row',
            children: [{
                component: 'antd.Col',
                sm: 8,
                xs: 24,
                children: Info({ title: '我的代办', value: '8个任务', bordered: true })
            }, {
                component: 'antd.Col',
                sm: 8,
                xs: 24,
                children: Info({ title: '本周任务平均处理时间', value: '32分钟', bordered: true })
            }, {
                component: 'antd.Col',
                sm: 8,
                xs: 24,
                children: Info({ title: '本周完成任务数', value: '24个任务', bordered: false })
            }]
        }]
    }, {
        component: 'antd.Card',
        className: `{{$styles('listCard')}}`,
        bordered: false,
        title: '标准列表',
        style: { marginTop: 24 },
        bodyStyle: { padding: '0 32px 40px 32px' },
        extra: extraContent,
        children: [{
            component: 'antd.Button',
            type: 'dashed',
            style: { width: '100%', marginBottom: 8 },
            icon: 'plus',
            onClick: '{{$showModal}}',
            children: '添加'
        }, {
            component: 'antd.List',
            size: "large",
            rowKey: "id",
            pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                pageSize: 5,
                total: 50,
            },
            dataSource: '{{data.list}}',
            renderItem: {
                _function: '(item)',
                component: 'antd.List.Item',
                actions: [{
                    component: 'a',
                    onClick: '{{$showEditModal(item)}}',
                    children: '编辑'
                }, MoreBtn],
                children: [{
                    component: 'antd.List.Item.Meta',
                    avatar: {
                        component: 'antd.Avatar',
                        src: '{{item.logo}}',
                        shape: 'square',
                        size: 'large'
                    },
                    title: {
                        component: 'a',
                        href: '{{item.href}}',
                        children: '{{item.title}}'
                    },
                    description: '{{item.subDescription}}'
                }, ListContent]
            }
        }]
    }]
}