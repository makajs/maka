import * as htmlparser from './htmlparser'

export default function html(props){ 
    const json = htmlparser.HTMLtoJSON(props.html || props.children) 
    return JSON.parse(json)
}