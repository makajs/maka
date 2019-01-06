import { actionMixin } from 'maka'
import { getTimeDistance } from './utils'

@actionMixin('base', 'numberHelper', 'i18n')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        const rankingListData = [];
        for (let i = 0; i < 7; i += 1) {
            rankingListData.push({
                title: this.i18n('app.analysis.test', { no: i }),
                total: 323234,
            });
        }

        this.base.ss({
            'data.rangePickerValue': getTimeDistance('year'),
            'data.rankingListData': rankingListData
        })
    }
    isActive = type => {
        const rangePickerValue = this.base.gs('data.rangePickerValue') || getTimeDistance('year')
        const value = getTimeDistance(type);
        if (!rangePickerValue[0] || !rangePickerValue[1]) {
            return '';
        }
        if (
            rangePickerValue[0].isSame(value[0], 'day') &&
            rangePickerValue[1].isSame(value[1], 'day')
        ) {
            return 'dashboard-analysis-currentDate';
        }
        return '';
    }

    selectDate = type => {
        this.base.ss({
            'data.rangePickerValue': getTimeDistance(type),
        })
    }

    handleRangePickerChange = () => {

    }

    handleChangeSalesType = (e) => {
        this.base.ss({
            'data.salesType': e.target.value,
        })
    }
    getPieData = (data) => {
        return data.salesType === 'all' ? data.salesTypeData : (
            data.salesType === 'online' ? data.salesTypeDataOnline : data.salesTypeDataOffline
        )
    }

    handleTabChange = key => {
        this.base.ss({
            'data.currentTabKey': key
        })
    }
}
