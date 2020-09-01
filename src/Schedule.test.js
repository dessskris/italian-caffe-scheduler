import React from 'react';
import { shallow } from './enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Schedule from './Schedule';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders h3", () => {
  act(() => {
    render(
      <Schedule />, container);
  });
  expect(container.querySelector('h3').textContent).toBe("This is what your schedule will look like:");
});

it("Handles sandwich name input", () => {
  let wrapper = shallow(<Schedule />);
  wrapper.find('input[type="text"]').simulate('change', {
    target: {value: 'special sandwich'}
  });
  expect(wrapper.state('newSandwichName')).toBe('special sandwich');
});

it("Handles taking in new orders without a custom name", () => {
  let wrapper = shallow(<Schedule />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('orders')).toEqual(['sandwich 1']);
});


it("Handles taking in new orders with a custom name", () => {
  let wrapper = shallow(<Schedule />);
  wrapper.find('input[type="text"]').simulate('change', {
    target: {value: 'special sandwich'}
  });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('orders')).toEqual(['special sandwich']);
});