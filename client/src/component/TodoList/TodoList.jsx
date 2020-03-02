import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper
} from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(5)
  }
});

const TodoList = ({ todos, classes }) => {
  const loading = todos;
  return (
    <Paper elevation={3} className={classes.root}>
      <List>
        {!!loading &&
          todos.map(({ description }, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText>{description}</ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
      </List>
    </Paper>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
