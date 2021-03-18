import React from "react";

import {
  InputLabel,
  FormHelperText,
  FormControl,
  Container,
  Input,
  Button,
  Grid,
} from "@material-ui/core";

const Login = () => {
  return (
    <Container >
      <Grid container >
       <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="Email">Email</InputLabel>
          <Input id="email" type="email" arial-descibedby="email-helper" />
          <FormHelperText id="email-helper">
            Tu email @spb.gba.gov.ar
          </FormHelperText>
        </FormControl>
        </Grid>
        <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="password">Contraseña</InputLabel>
          <Input
            id="password"
            type="password"
            arial-descibedby="password-helper"
          />
          <FormHelperText id="password-helper">
            Tu contraseña personal
          </FormHelperText>
        </FormControl>
        </Grid>
        <Grid item md={12}>
        <Button variant="contained" color="secondary" size='large' >
          Iniciar Sesion
        </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
