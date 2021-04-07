import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Fab,
  Grid,
  Hidden,
} from "@material-ui/core";
import {
  GroupAdd,
  PersonAdd,
  Print,
  Create,
  AddCircle,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';

import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, legajo, entrada, salida, total) {
  return { name, legajo, entrada, salida, total };
}

const rows = [
  createData("Preuba1", "00001", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba2", "00002", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba3", "00003", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba4", "00004", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba5", "00005", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba6", "00006", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba7", "00007", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba8", "00008", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba9", "00009", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba10", "000010", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba11", "000011", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba12", "000012", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba13", "000013", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba14", "000014", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba15", "000015", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba16", "000016", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba17", "000017", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba18", "000018", "24/01/2021 10:00", "24/01/2021 11:00", 1),
  createData("Preuba19", "000019", "24/01/2021 10:00", "24/01/2021 11:00", 1),
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  container2: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Personal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Button
            style={{ backgroundColor: "#6fbf73" }}
            size="large"
            variant="contained"
            color="inherit"
            startIcon={<PersonAdd />}
            fullWidth
          >
            Alta de agente
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button
            style={{ backgroundColor: "#ff9100" }}
            size="large"
            variant="contained"
            color="inherit"
            startIcon={<Print />}
            fullWidth
          >
            Imprimir Listado
          </Button>
        </Grid>
        
        <Grid item xs={6} md={8}>
          <form className={classes.container2} noValidate>
            <TextField
              id="fecha"
              label="Dia"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12} md={12}>
          <Fab onClick={handleClick} variant="extended" style={{ backgroundColor: "#03a9f4" }}>
            <AddCircle
              className={classes.extendedIcon}
              style={{ color: "white" }}
            />
            Cargar presente
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Apellido/Nombre</TableCell>
                  <Hidden smDown>
                    <TableCell>Legajo</TableCell>
                  </Hidden>
                  <TableCell>Entrada</TableCell>
                  <Hidden smDown>
                    <TableCell>Salida</TableCell>
                  </Hidden>
                  <TableCell>Total Hs</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <Hidden smDown>
                      <TableCell>{row.legajo}</TableCell>
                    </Hidden>
                    <TableCell>{row.entrada}</TableCell>
                    <Hidden smDown>
                      <TableCell>{row.salida}</TableCell>
                    </Hidden>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>
                      <IconButton aria-label="edit">
                        <Create fontSize="small" />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon fontSize="small" style={{ color: "red" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClick} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
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
          <Button onClick={handleClick} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Personal;
