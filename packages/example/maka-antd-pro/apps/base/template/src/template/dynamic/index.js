export default function dynamic(props){
    let method = props.method || '$dynamicView'
    let args = JSON.stringify(props) 
    return `{{ ({ _isMeta: true, value: ${method}(${args}) }) }}`
}