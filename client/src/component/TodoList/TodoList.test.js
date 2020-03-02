import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoList from './TodoList';

describe('Todo test', () => {
  const todos = [
    { description: 'to do list 1' },
    { description: 'to do list 2' }
  ];

  it('component renders without crashing', () => {
    const todoList = shallow(<TodoList todos={todos} />);
    const list = todoList.find('List');
    expect(list).toBeTruthy();
  });

  it('component renders todo list correctly', async () => {
    const todoList = await mount(<TodoList todos={todos} />);
    expect(todoList.text().includes('to do list 1')).toBe(true);
    expect(todoList.text().includes('to do list 2')).toBe(true);
    expect(todoList.text().includes('to do list 3')).toBe(false);
  });
});
