import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App test', () => {
  it('page renders without crashing', () => {
    const app = shallow(<App />);
    const todo = app.find('Todo');
    expect(todo).toBeTruthy();
  });
});
