import { Grid, Typography } from "@material-ui/core";
//Material UI is one of the popular React UI frameworks.
const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        padding: "30px", minHeight: "93vh", backgroundImage: "url('https://www.cheapassignmenthelp.co.uk/wp-content/uploads/2021/02/Careers.jpg')", width: "100%", backgroundPositionX: "center", backgroundSize: "100% 100%",
      }}
    >
      <Grid item>
        <Typography variant="h2">Welcome to Job Portal</Typography>
      </Grid>
    </Grid >
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
