export function trimLeft(str) {
    return str.replace(/(^\s*)/g, "")
}

export function trimRight(str) {
    return str.replace(/(\s*$)/g, "")
}

export function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "")
}

export function toJson(str) {
    return (new Function("return " + str))()
}

export default {
    trimLeft,
    trimRight,
    trim,
    toJson
}