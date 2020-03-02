const Todo = require('../model/Todo');

const TodoRepository = () => {
  const createTodo = async data => {
    try {
      const todo = await Todo.create(data);
      return todo.id;
    } catch (err) {
      return err;
    }
  };

  const getTodos = async () => {
    try {
      const todos = await Todo.findAll({ raw: true });
      return todos;
    } catch (err) {
      return err;
    }
  };

  return { createTodo, getTodos };
};

module.exports = TodoRepository;
