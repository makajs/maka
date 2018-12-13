import React, { PureComponent } from 'react'
import pkgJson from './package.json'
import { actionMixin } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }
}

const view = (props) => {
    const { base, onChange } = props
    const data = base.getState('data')

    return (
        <div className='maka-react-view'>
            <div>
                {data.content + data.input}
            </div>
            <input placeholder='world' value={data.input} onChange={onChange} />
        </div>
    )
}
/*or
class view extends PureComponent{
    render(){
        const data = this.props.base.getState('data')
        const onChange = this.props.onChange
        return (
            <div className='maka-react-view'>
                <div>
                    {data.content + data.input}
                </div>
                <input placeholder='world' value={data.input} onChange={onChange} />
            </div>
        )
    }
} 
*/

export {
    name,
    state,
    action,
    view
}