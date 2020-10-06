import { Component } from 'react';

import wrapper from './wrapper';

@wrapper()
export default class C extends Component {
  render() {
    return this.props.maka({ ...this.props, path: 'root' });
  }
}
