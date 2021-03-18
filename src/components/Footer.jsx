import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  footer: {
    
  },
  appBar: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: theme.spacing(1),
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#002329",
    color: "white",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    position: "fixed",
    bottom: 0,
    padding: theme.spacing(1),
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#002329",
    marginRight: 36,
    color: "white",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

const Footer = (props) => {
  const classes = useStyles();
const {open}=props

  return (

    < div className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}>
        <Typography variant="overline" align="center" noWrap gutterBottom>
          Create by Emanuel Garcia
        </Typography>
      </div>    

      

  );
};

export default Footer;
