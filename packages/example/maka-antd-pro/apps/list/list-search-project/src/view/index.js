import Filter from './filter'
import List from './list'

export default {
    component: 'div',
    className: `{{$styles('coverCardList')}}`,
    children: [Filter, List]
}