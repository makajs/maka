import React from 'react'
import { getAction, getComponent, appInstances } from 'maka'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import enUS from 'antd/lib/locale-provider/en_US'

export default class hoc extends React.PureComponent {
    constructor(props) {
        super(props)
        var i18n = getAction('i18n')
        i18n.change = this.changeLocale
        this.state = { locale: i18n.locale }
    }

    changeLocale = (locale) => {
        var i18n = getAction('i18n')
        i18n.locale = locale

        this.setState({ locale })
        setTimeout(() => {
            const apps = appInstances
            const keys = Object.keys(apps)
            keys.forEach(k => {
                const inst = apps[k].instance
                inst.forceUpdate()
            })
        })
    }

    render() {
        var { children, ...other } = this.props,
            antd = getComponent('antd'),
            locale


        if (this.state.locale == 'zh-CN') {
            locale = zhCN
        }
        else if (this.state.locale == 'en-US') {
            locale = enUS
        }

        children = React.cloneElement(children, { ...other, locale: this.state.locale })

        return (
            <antd.LocaleProvider locale={locale} {...this.props}>
                {children}
            </antd.LocaleProvider>
        )
    }
}
