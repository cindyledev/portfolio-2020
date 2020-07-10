import React from "react";
import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          CINDY LE
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          FULL STACK DEVELOPER • AWS
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          I'm experienced in wide range of frontend technologies and primarily
          specialize in JavaScript and React.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <IconButton aria-label="linkedin" color="primary">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="github" color="primary">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="github" color="primary">
                <MailIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
