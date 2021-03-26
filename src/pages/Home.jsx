
import { Grid } from "@material-ui/core";
import Modulo from '../components/Modulo'

const Home = () => {
  const text = ["Presentismo", "alta Agente"];
  return (
    <div>
      <Grid container spacing={3}> 
        <Grid item xs={12} md ={6} lg={3} >
        <Modulo nombre="Modulo de gestion de Personal" img="assignment_ind" text={text} to="/personal"/>
        </Grid>
        <Grid item xs={12} md ={6} lg={3} >
        <Modulo nombre="Registro de Internos" img="corporate_fare" text={text} to="/registro"/>
        </Grid>

      </Grid>
    </div>
  );
};

export default Home;
