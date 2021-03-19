import React, {useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer:{
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
  const [errores,setErrores]= useState([{error: "email", estado:null , texto:""},{error: "contraseña", estado:null , texto:""}])
  const [correo,setCorreo] = useState('');


  
  const validacion = (value)=>{
    setCorreo(value)
    const emailRegex =/^[^@]+@spb.gba.gov.ar\b(?!\s)/
    if(!emailRegex.test(value)){
      const datos =errores.map(item=> (
        item.error==="email" ?{
          ...item,estado:true,texto:"@spb.gba.gov.ar"}:item
      ))
      setErrores(datos)
          console.log("entro")
      //setErrores({...errores,email:true})
    }
    else {
      const datos =errores.map(item=> (
        item.error==="email" ?{
          ...item,estado:false,texto:""}:item
      ))
      console.log("entro salio")
      setErrores(datos)
    }
    
    
  }

  const estadoError=(constatar)=>{
    const error = errores.filter(item => item.error===constatar).map(item=>{return item.estado})
    return  Object.values(error)[0]
  }
  const textoError=(constatar)=>{
    const error = errores.filter(item => item.error===constatar).map(item=>{return item.texto})
    return  Object.values(error)[0]
  }



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
        <form className={classes.form} noValidate>
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
            value={correo}
            onChange={(e)=>validacion(e.target.value)}
            error={estadoError("email")}
            helperText={textoError("email")}
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
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color='inherit'>
                Olvido su contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color='inherit'>
                {"No tenes Usuario? registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
    <div className={classes.footer} >
        <Typography variant="overline" align="center" noWrap gutterBottom>
          Create by Emanuel Garcia
        </Typography>
      </div>  
    </div>
    );
};

export default Login;
