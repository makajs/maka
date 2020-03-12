import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

describe("A suite", () => {
  it("contains foo", () => {
    assert(shallow(<Foo />).contains(<div className="foo" />));
  });

  it("contains .foo", () => {
    assert(shallow(<Foo />).is('.foo'));
  });

  it("contains .foo length 1", () => {
    assert(mount(<Foo />).find('.foo').length === 1);
  });
});
