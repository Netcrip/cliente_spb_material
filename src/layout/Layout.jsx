import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Main from '../components/Main'


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Layout = (props) => {
  const {Page} = props
  const classes = useStyles(); 
  const [open, setOpen] = useState(true);

  const handleOpenClose = () => {
    setOpen(!open);
  };


  return (      
    <div className={classes.root}>
      <Navbar handleOpenClose={handleOpenClose} open={open} />
      <Sidebar handleOpenClose={handleOpenClose} open={open} />
      <Main Page={Page}/>
      <Footer open={open}/>
    </div>
  );
};

export default Layout;
