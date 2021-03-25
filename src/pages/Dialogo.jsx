import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
const Dialogo = (props) => {
    const {open,handleClickOpen}=props

    return (
        <div>
            
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClickOpen}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickOpen}>
                Cancel
              </Button>
              <Button onClick={handleClickOpen} >
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        
        </div>
    )
}

export default Dialogo
