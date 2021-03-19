import React from 'react'
import './assets/css/main.css'
import {ThemeProvider} from '@material-ui/core/styles'


import theme from './assets/css/themaConfig'

import Singin from './pages/Singin'



function App() {
  return (
    <ThemeProvider theme={theme}>
    <Singin/>
    </ThemeProvider>    
  );
}

export default App;
