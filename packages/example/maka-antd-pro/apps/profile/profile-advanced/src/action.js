import React from 'react'
import { actionMixin } from 'maka'

@actionMixin('base', 'classnames')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = suffix => `profile-advanced-${suffix}`


    operationTabChange = key => {
        this.base.ss({ 'data.operationkey': key })
    }

}