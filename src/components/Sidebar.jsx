import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Icon from "@material-ui/core/Icon";
import { Typography, ListSubheader } from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { handleOpenClose, open } = props;
  const Listado = [
    {
      nombre: "I",
      elemento: [
        { nombre: "Inicio", icono: "home", to:'/home' },
      ],
    },
    {
      nombre: "P",
      elemento: [
        { nombre: "Planilla Carga", icono: "person_add", to:'/personal' },
        { nombre: "Impresion Planilla", icono: "print", to:'/personal'},
      ],
    },
    {
      nombre: "RI",
      elemento: [
        { nombre: "Planilla internos", icono: "person_add", to:'/personal' },
        { nombre: "Impresion otros", icono: "print", to:'/personal' },
      ],
    },
  ];
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleOpenClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      <Divider />
      <List>
        {Listado.map((sector, i) => (
          <div key={i}>
            <ListSubheader component="div" id="nested-list-subheader">
              {sector.nombre}
            </ListSubheader>
            {sector.elemento.map((item,k) => 
             <ListItem button key={item.nombre} component={Link} to={item.to}>
             <ListItemIcon>
             <Icon style={{ fontSize: 25 }}>{item.icono}</Icon>
             </ListItemIcon>
             <ListItemText primary={item.nombre} />
           </ListItem>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
