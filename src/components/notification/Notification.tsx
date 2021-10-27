import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { NotifyProps, SnackbarOriginProps } from "./type";
import useStyles from "./style";

const Notification: React.FC<{
  notify: NotifyProps;
  setNotify: (value: NotifyProps) => void;
  snackbarOrigins: SnackbarOriginProps;
}> = ({ notify, setNotify, snackbarOrigins }) => {
  const classes = useStyles();
  const handleClose = () => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={snackbarOrigins}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
