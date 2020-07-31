import React from "react";
import { Container } from "@material-ui/core";

import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Achievements from "../components/Achievements";

export default function AboutPage() {
  return (
    <Container>
      <Experiences />
      <Education />
      <Certificates />
      <Achievements />
    </Container>
  );
}
