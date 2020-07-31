import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";

import certificates from "../certificates";

export default function Certificates() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h3">Certificates</Typography>
        {certificates.map((exp, index) => (
          <Grid container>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    {exp.issueDate}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid
                    container
                    item
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {exp.name}
                    </Typography>
                    <Typography variant="h6">{exp.employer}</Typography>
                    <Typography variant="subtitle1">
                      {exp.organization}
                    </Typography>
                    <Typography>{exp.url}</Typography>
                  </Grid>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        ))}
      </Container>
    </React.Fragment>
  );
}
