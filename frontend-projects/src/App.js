import "./App.css";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";

const useStyles = (theme) => ({
  root: {
    // flexGrow: 1,
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  margin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "center",
  },
});

function App(props) {

  return (
    <div>
      <header>
        <div class="header-links">
          <ul>
            <li>
              <a href="/SomeFolder/About.html">About</a>
            </li>
            <li>
              <a href="/SomeFolder/Discover.html">Discover</a>
            </li>
            <li>
              <a href="/SomeFolder/GetStarted.html">Get Started</a>
            </li>
          </ul>
        </div>
        <p>Checkout my frontend projects</p>
      </header>

      <br />
      <div>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <ProjectCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(useStyles)(App);
