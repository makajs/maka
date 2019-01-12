import { actionMixin } from 'maka'
@actionMixin('base')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = (suffix) => `account-center-${suffix}`

    inputConfirm = () =>{

    }

    inputChange = () => {

    }

    showInput = () => {
        
    }
}
