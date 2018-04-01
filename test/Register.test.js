import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import { Register } from '../src/features/event/Register';

Enzyme.configure({ adapter: new Adapter() });

describe("<Register />", () => {
  it("Should render title correctly", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find("#RegisterTitle").text()).to.equal("Evenn Registration Form");
  });

  it("Should danger to select ticket type", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find("#RegisterPrice").hasClass("is-danger")).to.equal(true);
    expect(wrapper.find("#RegisterPrice").text()).to.equal("Please select ticket type..");
  });

  it("Should have Price: 100THB when select regular type", () => {
    const wrapper = shallow(<Register ticketType="regular" />);
    expect(wrapper.find("#RegisterPrice").hasClass("is-danger")).to.equal(false);
    expect(wrapper.find("#RegisterPrice").text()).to.equal("Price: 100THB");
  });
});
