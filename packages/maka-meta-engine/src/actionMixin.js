import MetaAction from './action'
import actionFactory from './actionFactory'

export default function actionMixin(...mixins) {
    return (target) => (option) => {
        var mixinInstances = {}
        var base = new MetaAction(option)
        mixinInstances.base = base


        if (mixins && mixins.length > 0) {
            mixins.forEach(m => {
                if (m != 'base') {
                    let actCls, act
                    if (typeof m == 'string') {
                        actCls = actionFactory.getAction(m)
                        act = new actCls({ ...option, mixins: mixinInstances })
                        if (act) {
                            mixinInstances[m] = act
                        }

                    }
                    else if (typeof m == 'object' && m.name) {
                        actCls = actionFactory.getAction(m.name)
                        act = new actCls({ ...option, ...m.option, mixins: mixinInstances })
                        if (act) {
                            mixinInstances[m.name] = act
                        }
                    }
                }
            })
        }

        var curr = new target({ ...option, mixins: mixinInstances })

        var ret  = curr 
        
        Object.keys(mixinInstances).forEach(k => ret[k] = mixinInstances[k])

        var retWrapper = {
            getDirectFuns: ()=> ret
        }

        retWrapper.initView = ret.base.initView

        base.config({ metaHandlers: ret })

        return retWrapper
    }
}
