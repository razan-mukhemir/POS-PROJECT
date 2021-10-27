import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import { ConfirmDialogProps } from "./type";
import useStyles from "./style";

const ConfirmDialog: React.FC<{
  confirmDialog: ConfirmDialogProps;
  setConfirmDialog: (value: ConfirmDialogProps) => void;
}> = ({ confirmDialog, setConfirmDialog }) => {
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          variant="contained"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
