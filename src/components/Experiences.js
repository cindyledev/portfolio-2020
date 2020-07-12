import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import experiences from "../experience";

export default function Experiences() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h3">Experience</Typography>
        {experiences.map((exp, index) => (
          <Container>
            <Grid container>
              <Grid
                container
                item
                xs={8}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Typography gutterBottom variant="h5" component="h2">
                  {exp.title}
                </Typography>
                <Typography variant="h6">{exp.employer}</Typography>
                <Typography variant="subtitle1">{exp.description}</Typography>
              </Grid>
              <Grid
                container
                item
                xs={4}
                justify="flex-end"
                alignItems="flex-start"
              >
                <Typography>
                  {exp.startDate} - {exp.endDate}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        ))}
      </Container>
    </React.Fragment>
  );
}
