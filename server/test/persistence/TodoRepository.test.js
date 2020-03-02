const database = require('./../../config/database');
const TodoRepository = require('./../../persistence/TodoRepository');

beforeAll(async () => {
  await database.sync({ force: true });
});

describe('TodoRepository test', () => {
  const todo1 = {
    description: ' an example test for todo 1'
  };

  const todo2 = {
    description: ' an example test for todo 2'
  };
  test('it could create a todo correctly', async () => {
    let todo1ID = await TodoRepository().createTodo(todo1);
    let todo2ID = await TodoRepository().createTodo(todo2);
    expect(todo1ID).toBeTruthy();
    expect(todo2ID).toBeTruthy();
  });

  test('get todo list correctly', async () => {
    let todoList = await TodoRepository().getTodos();
    expect(typeof todoList).toBe('object');
    expect(todoList.length).toBe(2);
  });
});
