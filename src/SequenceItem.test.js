import React from 'react';
import { shallow } from './enzyme';
import { unmountComponentAtNode } from 'react-dom';

import { SequenceItem } from './SequenceItem';

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

it("Renders a sequence item", () => {
  let wrapper = shallow(<SequenceItem seqNo={1} secs={0} task="Task" />);
  expect(wrapper.find('tr')).toHaveLength(1);
  expect(wrapper.find('td')).toHaveLength(3);
  expect(wrapper.find('td').at(0).text()).toEqual("1.");
  expect(wrapper.find('td').at(1).text()).toEqual("00:00:00");
  expect(wrapper.find('td').at(2).text()).toEqual("Task");
});

it("Renders time correctly with a minute component", () => {
  let wrapper = shallow(<SequenceItem seqNo={1} secs={90} task="Task" />);
  expect(wrapper.find('td').at(1).text()).toEqual("00:01:30");
});

it("Renders time correctly with an hour component", () => {
  let wrapper = shallow(<SequenceItem seqNo={1} secs={3601} task="Task" />);
  expect(wrapper.find('td').at(1).text()).toEqual("01:00:01");
});