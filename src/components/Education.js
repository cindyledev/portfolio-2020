import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import education from "../education.js";

export default function Education() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h3">Education</Typography>
        {education.map((exp, index) => (
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
                  {exp.school}
                </Typography>
                <Typography variant="h6">{exp.level}</Typography>
                <Typography variant="h6">{exp.program}</Typography>
                <Typography variant="subtitle1">{exp.awards}</Typography>
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
