import memoize from 'lodash/memoize'

/**
 * [是否存在参数]
 * @param  {[type]} path [路径]
 * @return {[type]}      [是否存在参数]
 */
export const existsParamsInPath = (path) => {
    return /,/.test(path)
}

/**
 * [解析路径]
 * @param  {[type]} path [路径]
 * @return {[type]}      [路径+参数数组]
 */
export const parsePath = memoize((path) => {
    if (!path) return
    if (path.indexOf(',') == -1) {
        return {
            path: path.replace(/\s/g, '')
        }
    } else {
        let segments = path.split(","),
            vars = segments.slice(1)
        return {
            path: segments[0].replace(/\s/g, ''),
            vars: vars.map(o => o.replace(/\s/g, ''))
        }
    }
})

export default {
    existsParamsInPath,
    parsePath
}


