import { getComponent } from 'maka'

export default {
    component: 'div',
    className: 'article-editor',
    children: [{
        component: 'div',
        className: 'article-editor-header',
        children: [{
            component: 'div',
            className: 'article-editor-header-left',
        }, {
            component: 'div',
            className: 'article-editor-header-center',
            children:{
                component: 'antd.Input',
                value: '{{data.title}}',
                placeholder: '请录入文章标题',
                onChange: `{{(e)=>$base.ss({'data.title': e.target.value})}}`
            },
        }, {
            component: 'div',
            className: 'article-editor-header-right',
            children: [{
                component: 'antd.Icon',
                type: 'save',
                className: 'icon-softly',
                title: '保存',
                onClick: '{{$saveClick}}'
            }, {
                component: 'antd.Icon',
                type: 'bars',
                className: 'icon-softly',
                title: '列表',
                onClick: '{{$goList}}'
            }, {
                component: 'antd.Icon',
                type: 'eye',
                className: 'icon-softly',
                title: '显示预览',
                onClick: `{{()=>$base.ss({'data.preview': $base.gs('data.preview') === true ? false:true })}}`
            }]
        }]

    }, {
        component: 'div',
        className: 'article-editor-main',
        children: [{
            component: 'div',
            className: 'article-editor-main-left',
            children: [ {
                component: 'CodeMirror',
                className: 'article-editor-main-left-content',
                options: {
                    mode: 'markdown',
                    theme: 'material',
                    lineNumbers: true
                },
                value: '{{data.content}}',
                onBeforeChange: `{{(e,d,v)=>{$base.ss({'data.content': v})}}}`
            }]

        }, {
            component: 'div',
            className: 'article-editor-main-right',
            _visible: '{{data.preview === true}}',
            children: [{
                component: 'div',
                className: 'article-editor-main-right-title',
                children: '{{data.title}}'
            }, {
                component: 'MarkdownViewer',
                className: 'markdown-body',
                source: '{{data.content}}',
                skipHtml: false,
                escapeHtml: false,
                renderers: { code: getComponent('CodeBlock') },
                
            }]

        }]
    }]
}