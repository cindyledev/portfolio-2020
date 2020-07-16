import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
  List,
  ListItem,
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import achievements from "../achievement";

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

export default function Achievements() {
  const classes = useStyles();

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
