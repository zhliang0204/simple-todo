import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoForm from './TodoForm';

describe('TodoForm test', () => {
  const onSubmit = jest.fn(values => values);
  const btnMessage = 'ADD';
  const props = { onSubmit, btnMessage };
  it('component renders without crashing', () => {
    const todoForm = mount(<TodoForm {...props} />);
    const form = todoForm.find('form');
    const btn = todoForm.find('Button');
    const textField = todoForm.find('TextField');
    expect(form).toBeTruthy();
    expect(btn).toBeTruthy();
    expect(textField).toBeTruthy();
    expect(todoForm.text().includes('ADD')).toBe(true);
  });

});
