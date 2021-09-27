import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import { ConfirmDialogProps } from "./types";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

const ConfirmDialog: React.FC<{
  confirmDialog: ConfirmDialogProps;
  setConfirmDialog: any;
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
        <Buttons
          variant="contained"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Buttons>
        <Buttons
          variant="contained"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        >
          Yes
        </Buttons>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
