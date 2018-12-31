
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.option = option
    }


    keyDown = (editClassNamePrefix) => (e) => {
        if (e.keyCode == 13) {
            this.focusNext(e.nativeEvent.srcElement, editClassNamePrefix)
        }
    }


    focusNext = (currentDom, editClassNamePrefix) => {
        var currClassName = this.getClassName(currentDom, editClassNamePrefix)
        if (!currClassName)
            return

        var nextClassName = this.getNextClassName(currClassName, editClassNamePrefix)
        if (!nextClassName)
            return

        var dom = document.querySelector('.' + nextClassName)
        if (!dom)
            return

        if (dom.className.indexOf('input') != -1) {
            dom.select()
            return
        }

        if (dom.className.indexOf('select') != -1) {
            dom.click()
            return
        }

        if (dom.className.indexOf('datepicker') != -1) {
            const input = dom.querySelector('input')
            input.click()
            return
        }

        if (dom.className.indexOf('checkbox') != -1) {
            const input = dom.querySelector('input')
            input.focus()
            return
        }
    }

    getClassName = (ele, editClassNamePrefix) => {
        if (ele.className.indexOf(editClassNamePrefix) != -1) {
            return ele.className
        }
        else {
            if (ele.parentElement) {
                return this.getClassName(ele.parentElement, editClassNamePrefix)
            }
            else
                return
        }
    }

    getNextClassName = (currentClassName,editClassNamePrefix) => {
        var regex = new RegExp(`${editClassNamePrefix}-(\\d*)`, 'i');
        var index = regex.exec(currentClassName)[1]
        if (index) {
            return editClassNamePrefix + '-' + (parseInt(index) + 1)
        }
        else {
            return
        }
    }
}