import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

const TextField = ({
  input,
  InputProps,
  variant = 'outlined',
  margin = 'dense',
  type = 'text',
  meta,
  fullWidth = true,
  ...rest
}) => {
  const showError = meta.touched || meta.initial;
  const error = showError && (meta.error || meta.submitError);
  return (
    <MuiTextField
      variant={variant}
      type={type}
      margin={margin}
      error={!!error}
      fullWidth={fullWidth}
      InputProps={InputProps}
      {...input}
      {...rest}
    />
  );
};

export default TextField;
