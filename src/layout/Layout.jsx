import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Layout = () => {
  const classes = useStyles(); 
  const [open, setOpen] = useState(true);

  const handleOpenClose = () => {
    setOpen(!open);
  };


  return (      
    <div className={classes.root}>
      <Navbar handleOpenClose={handleOpenClose} open={open} />
      <Sidebar handleOpenClose={handleOpenClose} open={open} />
      <Main />
      <Footer open={open}/>
    </div>
  );
};

export default Layout;
