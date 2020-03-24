import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DailogBoxComponent = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const actions = (
    <div>
      {" "}
      <Button
        onClick={props.onDailogBoxClose ? props.onDailogBoxClose : handleClose}
        color="primary"
      >
        Ok
      </Button>
      <Button
        onClick={props.onDailogBoxClose ? props.onDailogBoxClose : handleClose}
        color="primary"
        autoFocus
      >
        Cancel
      </Button>
    </div>
  );
  return (
    <div>
      <Dialog
        open={props.open ? props.open : open}
        onClose={props.onDailogBoxClose ? props.onDailogBoxClose : handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.dailogBoxTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.dailogBoxText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.dailogBoxActions ? props.dailogBoxActions : actions}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DailogBoxComponent;
