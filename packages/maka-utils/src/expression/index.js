import memoize from 'lodash/memoize'

// {{***}} 
const reg = /^\s*\{{2}([\s\S]+)\}{2}\s*$/m

// {{{***}}}
const reg1 = /^\s*\{{3}([\s\S]+)\}{3}\s*$/m

export const isExpression = memoize((v) => {
    return reg.test(v) || reg1.test(v)
})

export const getExpressionBody = memoize((v)=> {
    if (reg1.test(v)) {
        return v.replace(reg1, (word, group) => group)
    }

    if (reg.test(v)) {
        return "return " + v.replace(reg, (word, group) => group)
    }

    return v
})

export default {
    isExpression,
    getExpressionBody
}