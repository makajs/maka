import { getComponent } from 'maka'

export default {
    component: 'div',
    className: 'article-viewer',
    children: [{
        component: 'div',
        className: 'article-viewer-header',
        children: [{
            component: 'div',
            className: 'article-viewer-header-left',
        }, {
            component: 'div',
            className: 'article-viewer-header-center',
            children: {
                component: 'div',
                children: '{{data.title}}'
            }
        }, {
            component: 'div',
            className: 'article-viewer-header-right',
            children: [{
                component: 'antd.Icon',
                type: 'bars',
                className: 'icon-softly',
                title: '列表',
                onClick: '{{$goList}}'
            }]
        }]

    }, {
        component: 'div',
        className: 'article-viewer-main markdown-body',
        children: [{
            component: 'MarkdownViewer',
            className: 'markdown-body',
            source: '{{data.content}}',
            skipHtml: false,
            escapeHtml: false,
            renderers: { code: getComponent('CodeBlock') },

        }]
    }]
}