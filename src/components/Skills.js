import React from "react";
import { loadCSS } from "fg-loadcss";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Icon, Typography } from "@material-ui/core";

import skills from "../skills";

const useStyles = makeStyles((theme) => ({}));

export default function Skills() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Typography>SKILLS</Typography>
        <Typography>Frontend</Typography>
        <Icon className="fab fa-js" fontSize="large" color="primary" />
        <Icon className="fab fa-html5" fontSize="large" color="primary" />
        <Icon className="fab fa-css3-alt" fontSize="large" color="primary" />
        <Icon className="fab fa-react" fontSize="large" color="primary" />
        <Icon className="fab fa-bootstrap" fontSize="large" color="primary" />
        <Icon className="fab fa-sass" fontSize="large" color="primary" />
        <Typography>Backend</Typography>
        <Icon className="fab fa-node-js" fontSize="large" color="primary" />
        <Typography>Deployment</Typography>
        <Icon className="fab fa-docker" fontSize="large" color="primary" />
        <Icon className="fab fa-github" fontSize="large" color="primary" />
        <Typography>Project Management</Typography>
        <Icon className="fab fa-git" fontSize="large" color="primary" />
        <Typography>AWS</Typography>
        <Icon className="fab fa-aws" fontSize="large" color="primary" />
      </Container>
    </React.Fragment>
  );
}
