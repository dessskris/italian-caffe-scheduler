import React from 'react';
import { shallow } from './enzyme';
import { unmountComponentAtNode } from 'react-dom';

import { Sequence } from './Sequence';

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

it("Renders take a break when order[] is empty", () => {
  let wrapper = shallow(<Sequence orders={[]} />);
  expect(wrapper.find('tbody')).toHaveLength(1);
  expect(wrapper.find('SequenceItem')).toHaveLength(1);
  expect(wrapper.find('SequenceItem').props().seqNo).toEqual(1);
  expect(wrapper.find('SequenceItem').props().secs).toEqual(0);
  expect(wrapper.find('SequenceItem').props().task).toEqual("Take a break.");
});

it("Renders sequences when order[] has 1 element", () => {
  let wrapper = shallow(<Sequence orders={['sandwich 1']} />);
  expect(wrapper.find('tbody')).toHaveLength(2);
  expect(wrapper.find('SequenceItem')).toHaveLength(3);
  expect(wrapper.find('SequenceItem').at(0).props().seqNo).toEqual(1);
  expect(wrapper.find('SequenceItem').at(0).props().secs).toEqual(0);
  expect(wrapper.find('SequenceItem').at(0).props().task).toEqual("Make sandwich 1");
  expect(wrapper.find('SequenceItem').at(1).props().seqNo).toEqual(2);
  expect(wrapper.find('SequenceItem').at(1).props().secs).toEqual(150);
  expect(wrapper.find('SequenceItem').at(1).props().task).toEqual("Serve sandwich 1");
  expect(wrapper.find('SequenceItem').at(2).props().seqNo).toEqual(3);
  expect(wrapper.find('SequenceItem').at(2).props().secs).toEqual(210);
  expect(wrapper.find('SequenceItem').at(2).props().task).toEqual("Take a break.");
});

it("Renders sequences when order[] has 2 elements", () => {
  let wrapper = shallow(<Sequence orders={['sandwich 1', 'special sandwich']} />);
  expect(wrapper.find('tbody')).toHaveLength(3);
  expect(wrapper.find('SequenceItem')).toHaveLength(5);
  expect(wrapper.find('SequenceItem').at(0).props().task).toEqual("Make sandwich 1");
  expect(wrapper.find('SequenceItem').at(1).props().task).toEqual("Serve sandwich 1");
  expect(wrapper.find('SequenceItem').at(2).props().task).toEqual("Make special sandwich");
  expect(wrapper.find('SequenceItem').at(3).props().task).toEqual("Serve special sandwich");
  expect(wrapper.find('SequenceItem').at(4).props().task).toEqual("Take a break.");
});
