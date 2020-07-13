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
import SchoolIcon from "@material-ui/icons/School";

import education from "../education.js";

export default function Education() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h3">Education</Typography>
        {education.map((exp, index) => (
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
                    <TimelineDot color="primary">
                      <SchoolIcon />
                    </TimelineDot>
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
                        {exp.school}
                      </Typography>
                      <Typography variant="h6">{exp.level}</Typography>
                      <Typography variant="h6">{exp.program}</Typography>
                      <Typography variant="subtitle1">{exp.awards}</Typography>
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
