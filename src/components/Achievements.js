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

import achievements from "../achievement";

export default function Achievements() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h3">Achievements</Typography>
        {achievements.map((exp, index) => (
          <Container>
            <Grid container>
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      {exp.startDate} - {exp.endDate}
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
                      <Typography variant="h6">{exp.source}</Typography>
                      <Typography variant="subtitle1">
                        Relevant courses: {exp.courses}
                      </Typography>
                    </Grid>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Container>
        ))}
      </Container>
    </React.Fragment>
  );
}
