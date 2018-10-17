import memoize from 'lodash/memoize'


export const existsParamsInPath = (path) => {
    return /,/.test(path)
}

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


