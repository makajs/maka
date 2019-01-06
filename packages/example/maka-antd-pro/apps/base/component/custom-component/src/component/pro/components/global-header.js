import React, { PureComponent } from 'react';
import { getComponent } from 'maka'
import RightContent from './RightContent';

export default class GlobalHeader extends PureComponent {

    componentWillUnmount() {
        this.triggerResizeEvent.cancel()
    }

    triggerResizeEvent() {
        const event = document.createEvent('HTMLEvents')
        event.initEvent('resize', true, false)
        window.dispatchEvent(event)
    }

    toggle = () => {
        const { collapsed, onCollapse } = this.props
        onCollapse(!collapsed)
        this.triggerResizeEvent()
    }

    render() {
        const Icon = getComponent('antd.Icon')
        const { collapsed, isMobile, logo } = this.props
        return (
            <div className='custom-component-pro-components-global-header-index-header'>
                <span className='custom-component-pro-components-global-header-index-trigger' onClick={this.toggle}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </span>
                <RightContent {...this.props} />
            </div>
        );
    }
}
