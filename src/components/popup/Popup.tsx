import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { PopupProps } from "./type";
import useStyles from "./popupStyle";

const Popup: React.FC<{
  children: React.ReactNode;
  openPopup: PopupProps;
  setOpenPopup: any;
}> = ({ children, openPopup, setOpenPopup }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup.isOpen}
      fullWidth
      maxWidth="xs"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {openPopup.title}
          </Typography>
          <Button
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
export default Popup;