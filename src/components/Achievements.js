import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import achievements from "../achievement";

export default function Achievements() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h3">Achievements</Typography>
        {achievements.map((exp, index) => (
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
                  {exp.name}
                </Typography>
                <Typography variant="h6">{exp.source}</Typography>
                <Typography variant="subtitle1">{exp.courses}</Typography>
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
