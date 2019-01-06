import React from 'react'
import { getAction, getComponent } from 'maka'

const locales = ['zh-CN', 'en-US'];
const languageLabels = {
    'zh-CN': '简体中文',
    'en-US': 'English',
};
const languageIcons = {
    'zh-CN': '🇨🇳',
    'en-US': '🇬🇧',
};

export default class selector extends React.Component {
    constructor(props) {
        super(props)
    }

    changeLang = ({ key }) => {
        const i18n = getAction('i18n')
        i18n.change(key)
        this.forceUpdate()
    }

    render() {
        const antd = getComponent('antd')
        const i18n = getAction('i18n')

        const {overlayClassName, ...other} =  this.props

        const menu = (
            <antd.Menu selectedKeys={[i18n.locale]} onClick={this.changeLang}>
                {locales.map(o => (
                    <antd.Menu.Item key={o}>
                        <span>
                            {languageIcons[o]}
                        </span>{' '}
                        {languageLabels[o]}
                    </antd.Menu.Item>
                ))}
            </antd.Menu>
        )
        return (
            <antd.Dropdown  overlayClassName={overlayClassName} overlay={menu} placement="bottomRight">
                <span  {...other}>
                    <antd.Icon type="global" title={i18n('lang')} />
                </span>
            </antd.Dropdown>
        );
    }

}
