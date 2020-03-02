import React, { useState, useEffect } from 'react';
import TodoForm from '../component/TodoForm/TodoForm';
import TodoList from '../component/TodoList/TodoList';
import Snackbar from '../component/SnackBar/Snackbar';
import todoAPI from '../client/api';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  container: {
    width: '80%',
    minWidth: theme.spacing(20),
    margin: 'auto',
    padding: 'auto'
  }
});

const Todo = ({ classes }) => {
  const [todos, setTodos] = useState(undefined);
  const [message, setMessage] = useState(undefined);
  const getTodos = () => {
    todoAPI
      .retrieveTodos()
      .then(setTodos)
      .catch(setMessage);
  };

  const generateTodo = values => {
    todoAPI
      .generateTodo(values)
      .then(_ => getTodos())
      .catch(setMessage);
  };

  useEffect(() => getTodos(), []);

  const loading = !todos;

  return (
    <Typography component="div" className={classes.container}>
      <TodoForm onSubmit={generateTodo} btnMessage={'ADD'} />
      {!loading && <TodoList todos={todos} />}
      {!!message && (
        <Snackbar
          isOpen={!!message}
          message={message.toString()}
          autoHideDuration={3000}
          handleClose={() => setMessage(undefined)}
        />
      )}
    </Typography>
  );
};

export default withStyles(styles)(Todo);
