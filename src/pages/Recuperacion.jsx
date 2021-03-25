import React, { useEffect, useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import md5 from 'md5'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useParams } from 'react-router-dom'

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

const Recuperacion = () => {
    const [tokenValido,setokenValido]=useState(false)
   
    const {id,token}=useParams()
   
    useEffect(()=>{
        //setokenValido(true)
    },[])

   
    
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword:"",

    },
    validationSchema: yup.object({
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
              <ErrorOutline />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cambio de contraseña
            </Typography> {tokenValido 
              ? <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
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
                Cambiar Contraseña
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
            : <Typography component="h1" variant="h5" color="error" >
            Token invalido
          </Typography> 
           }
           </div>
        </Container>
        <div className={classes.footer}>
          <Typography variant="overline" align="center"  noWrap gutterBottom>
            Create by Emanuel Garcia
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Recuperacion
