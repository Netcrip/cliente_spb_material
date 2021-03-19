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
  const [datos, setDatos] = useState({
    email: {
      valor: "",
      error: false,
      helperText: "",
    },
    emailValidacion: {
        valor:"",
        error: false,
        helperText: "",
      },
    password: {
        valor: "",
        error: false,
       helperText: "",
      },
      passwordValidacion: {
        valor: "",
        error: false,
        helperText: "",
      },
  });

  const validacionEmail = (value) => {
    const emailRegex = /^[^@]+@spb.gba.gov.ar\b(?!\s)/;
    if (!emailRegex.test(value.value)) {       
            setDatos({...datos, [value.id]:{...datos[value.id],valor:value.value,error:true,helperText:"@spb.gba.gov.ar"}});

    } else {
        setDatos({...datos, [value.id]:{...datos[value.id],valor:value.value,error:false,helperText:""}});
    }
  };
  const validacionRepetir=(value)=>{
        if(datos.email.valor!==value.value && datos[value.id].error===false){
            setDatos({...datos, [value.id]:{...datos[value.id],valor:value.value,error:true,helperText:"Los datos ingresados no coinciden"}});
        }
        else if(datos[value.id].error===false) 
            setDatos({...datos, [value.id]:{...datos[value.id],valor:value.value,error:false,helperText:""}});
       
  }

  const login = (e) => {
    e.preventDefault();

  };

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
            <form className={classes.form} noValidate onSubmit={login}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electronico"
                name="email"
                autoComplete="email"
                autoFocus
                value={datos.email.valor}
                onChange={(e)=>{validacionEmail(e.target)}}
                error={datos.email.error}
                helperText={datos.email.helperText}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="emailValidacion"
                label="Repita Correo electronico"
                name="emailValidacion"
                autoComplete="emailValidacion"
                autoFocus
                value={datos.emailValidacion.valor}
                onBlur={e=>validacionRepetir(e.target)}
                onChange={(e)=>{validacionEmail(e.target)}}
                error={datos.emailValidacion.error}
                helperText={datos.emailValidacion.helperText}
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
                min
                autoComplete="current-password"
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
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Repita Contraseña"
                type="password"
                id="password2"
                autoComplete="current-password"
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
