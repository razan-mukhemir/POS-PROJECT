import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { NotifyProps } from "./types";
const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));

const Notification: React.FC<{
  notify: NotifyProps;
  setNotify: any;
}> = ({ notify, setNotify }) => {
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
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
