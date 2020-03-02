const TodoRepository = require('./../persistence/TodoRepository');

const TodoController = () => {
  const getRoot = async (_, res) => {
    try {
      const todos = await TodoRepository().getTodos();
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };
  const post = async (req, res) => {
    const { body } = req;
    try {
      const todoId = await TodoRepository().createTodo(body);
      return res.status(200).json({ todoId });
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return { getRoot, post };
};

module.exports = TodoController;
