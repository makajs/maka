import React from 'react'
import {getComponent} from 'maka'
import zh_CN from 'antd/lib/locale-provider/zh_CN';

export default function LocaleProviderComponent(props) {
    var LocaleProvider = getComponent('antd.LocaleProvider')
    return (
        <LocaleProvider locale={zh_CN} {...props}></LocaleProvider>
    )
}