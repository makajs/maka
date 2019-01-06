import React, { PureComponent } from 'react';
import { getComponent } from 'maka'


const nullSlectItem = {
    label: '',
    key: '',
};

const styles = {
    row: 'account-setting-base-view-row',
    item: 'account-setting-base-view-item',
}


class GeographicView extends PureComponent {
    getProvinceOption() {
        const { provinces } = this.props;
        return this.getOption(provinces);
    }

    getCityOption = () => {
        const { citys } = this.props;
        return this.getOption(citys);
    };

    getOption = list => {
        const Option = getComponent('antd.Select.Option')
        if (!list || list.length < 1) {
            return (
                <Option key={0} value={0}>
                    没有找到选项
        </Option>
            );
        }
        return list.map(item => (
            <Option key={item.id} value={item.id}>
                {item.name}
            </Option>
        ));
    };

    selectProvinceItem = item => {
        const { onChange } = this.props;
        onChange({
            province: item,
            city: nullSlectItem,
        });
    };

    selectCityItem = item => {
        const { value, onChange } = this.props;
        onChange({
            province: value.province,
            city: item,
        });
    };

    conversionObject() {
        const { value } = this.props;
        if (!value) {
            return {
                province: nullSlectItem,
                city: nullSlectItem,
            };
        }
        const { province, city } = value;
        return {
            province: province || nullSlectItem,
            city: city || nullSlectItem,
        };
    }

    render() {
        const { province, city } = this.conversionObject();
        const Select = getComponent('antd.Select');
        const Spin = getComponent('antd.Spin')
        return (
            <Spin spinning={false} wrapperClassName={styles.row}>
                <Select
                    className={styles.item}
                    value={province}
                    labelInValue
                    showSearch
                    onSelect={this.selectProvinceItem}
                >
                    {this.getProvinceOption()}
                </Select>
                <Select
                    className={styles.item}
                    value={city}
                    labelInValue
                    showSearch
                    onSelect={this.selectCityItem}
                >
                    {this.getCityOption()}
                </Select>
            </Spin>
        );
    }
}

export default GeographicView;
