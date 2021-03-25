import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import md5 from 'md5'
import { useFormik } from 'formik'
import * as yup from 'yup'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
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

const Singin = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      repeatEmail:"",
      legajo:"",
      password: "",
      repeatPassword:"",

    },
    validationSchema: yup.object({
      email: yup
        .string('')
        .matches(/^[a-z]+\.+[a-z]+[^@]+@spb.gba.gov.ar\b(?!\s)/,'Ingrese un correo @spb.gba.gov.ar')
        .required('El email es requerido')
        .oneOf([yup.ref("repeatEmail")],"Los email no coinciden"),
        repeatEmail: yup
        .string('')
        .matches(/^[a-z]+\.+[a-z]+[^@]+@spb.gba.gov.ar\b(?!\s)/,'Ingrese un correo @spb.gba.gov.ar')
        .required('El email es requerido')
        .oneOf([yup.ref("email")]," "),
        legajo: yup
        .number().required().positive('No se permite el ingreso de " - "').integer('El legajo debe ingresarse sin "." ')
        .required('El email es requerido'),
        password: yup
        .string('')
        .min(8, 'La contraseña debe tener un mínimo de 8 caracteres.')
        .required('La contraseña es requerida')
        .oneOf([yup.ref("repeatPassword")],"Las contraseñas no coinciden"),
        repeatPassword: yup
        .string('')
        .min(8, 'La contraseña debe tener un mínimo de 8 caracteres.')
        .required('La contraseña es requerida')
        .oneOf([yup.ref("password")]," "),
    }),
    onSubmit: (values) => {
      console.log(md5(values.password))
    },
  });
  

  
  return (
    <div>
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicio de Sesion
            </Typography>
            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electronico"
                name="email"
                placeholder='e.jemplo@spb.gba.gov.ar'
                autoComplete="email"
                autoFocus
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
                id="repeatEmail"
                label="Repita Correo electronico"
                name="repeatEmail"
                autoComplete="repeatEmail"
                value={formik.values.repeatEmail}
                onChange={formik.handleChange}
                error={formik.touched.repeatEmail && Boolean(formik.errors.repeatEmail)}
                helperText={formik.touched.repeatEmail && formik.errors.repeatEmail}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="legajo"
                label="Legajo"
                id="legajo"
                type='number'
                autoComplete="current-password"
                onBlur={formik.onBlur}
                value={formik.values.legajo}
                onChange={formik.handleChange}
                error={formik.touched.legajo && Boolean(formik.errors.legajo)}
                helperText={formik.touched.legajo && formik.errors.legajo}
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
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="repeatPassword" 
                label="Repita Contraseña"
                type="password"
                id="repeatPassword"
                autoComplete="current-password"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Registrase
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="#" variant="body2" color="inherit">
                    {"Ya tiene Usuario?"}
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
      </div>
    </div>
  );
};

export default Singin;
