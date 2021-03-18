import React from 'react'
import './assets/css/main.css'
import {ThemeProvider} from '@material-ui/core/styles'


import theme from './assets/css/themaConfig'
import Login from './pages/Login'



function App() {
  return (
    <ThemeProvider theme={theme}>
    <Login></Login>
    </ThemeProvider>    
  );
}

export default App;
