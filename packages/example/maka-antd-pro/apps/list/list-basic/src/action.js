import { actionMixin } from 'maka'

@actionMixin('base', 'moment')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    showEditModal = (item) => ()=> {

    }

    editAndDelete = (key,item) => ()=>{

    }
}