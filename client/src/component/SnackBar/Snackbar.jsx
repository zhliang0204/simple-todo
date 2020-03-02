import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiSnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const styles = () => ({
  error: {
    backgroundColor: 'grey'
  }
});

const Snackbar = ({ message, isOpen, autoHideDuration, handleClose }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <MuiSnackbarContent
        message={message}
        action={
          <Button color="inherit" size="small" onClick={handleClose}>
            <CloseOutlinedIcon />
          </Button>
        }
      />
    </MuiSnackbar>
  );
};

export default withStyles(styles)(Snackbar);
