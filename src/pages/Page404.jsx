import PageNotFound from "../assets/img/404-error.jpg";
import { Link } from "react-router-dom";
import { Paper, Grid, AppBar, Toolbar, Button } from "@material-ui/core";

const Page404 = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="fixed">
            <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Iniciar Sesion{" "}
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
          </Grid>
          <Grid item xs={12}>
          <Paper style={{background: "white" }}>
            <img
              src={PageNotFound}
              style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth:"800px",
                width: "100%",
                height: "auto"
              }}
              alt=""
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page404;
