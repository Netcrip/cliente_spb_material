import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import md5 from "md5";

import Dialogo from './Dialogo'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: theme.spacing(1),
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#002329",
    color: "white",
  },
}));


const Login = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string("")
        .matches(
          /^[a-z]+\.+[a-z]+[^@]+@spb.gba.gov.ar\b(?!\s)/,
          "Ingrese un correo @spb.gba.gov.ar"
        )
        .required("el Email es requerido"),
      password: yup
        .string("")
        .min(8, "La contraseña debe tener un mínimo de 8 caracteres.")
        .required("La contraseña es requerida"),
    }),
    onSubmit: (values) => {
      console.log(md5(values.password));
    },
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("entro")
    setOpen(!open);
  };



  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de Sesion
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoFocus
              placeholder="e.jemplo@spb.gba.gov.ar"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              value={formik.values.password}
              autoComplete="current-password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" onClick={handleClickOpen} variant="body2" color="inherit">
                  Olvido su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="inherit">
                  {"No tenes Usuario? registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        </Container>
      <div className={classes.footer}>
        <Typography variant="overline" align="center" noWrap gutterBottom>
          Create by Emanuel Garcia
        </Typography>
      </div>
    <Dialogo open={open} handleClickOpen={handleClickOpen}/>
    </div>
  );
};

export default Login;
