import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import { Button, Typography } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  customContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customItem: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.5)
  }
});

const TodoForm = ({ onSubmit, btnMessage, classes }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <form
          onSubmit={async event => {
            await handleSubmit(event);
            form.reset();
          }}
        >
          <Typography component="div" className={classes.customContainer}>
            <Field name="description" component={TextField} required />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.customItem}
            >
              {btnMessage}
            </Button>
          </Typography>
        </form>
      )}
    />
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  btnMessage: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoForm);
