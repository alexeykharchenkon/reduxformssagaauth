import React, { memo } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

interface MessageComponentProps {
    isOpen: boolean;
    message: string;
    type: any;
    closeMessage: () => void;
}

export const MessageComponent = memo(({isOpen, message, type, closeMessage}: MessageComponentProps) => {
  const handleClose = () => closeMessage();
  return (
    <div>
      <Snackbar 
        open={isOpen} 
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
});