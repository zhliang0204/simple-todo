const Todo = require('./../../model/Todo');
const database = require('./../../config/database');

beforeAll(async () => {
  await database.sync({ force: true });
});

describe('Todo model', () => {
  test('it could generate todo correctly', async () => {
    todo = await Todo.create({
      description:
        'A coding test about todos, it should finish before 3rd March'
    });
    expect(todo.description).toBe(
      'A coding test about todos, it should finish before 3rd March'
    );
  });
});
