import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
  List,
  Typography,
} from "@material-ui/core";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import education from "../education.js";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    paddingLeft: "1rem",
  },
  item: {
    listStyle: "disc",
  },
}));

export default function Education() {
  const classes = useStyles();

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
                      {exp.courses ? (
                        <Typography variant="subtitle1">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography className={classes.heading}>
                                Relevant courses:
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <List className={classes.list}>
                                {exp.courses.map((course, i) => (
                                  <li className={classes.item}>
                                    <Typography variant="body2">
                                      {course}
                                    </Typography>
                                  </li>
                                ))}
                              </List>
                            </AccordionDetails>
                          </Accordion>
                        </Typography>
                      ) : null}
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
