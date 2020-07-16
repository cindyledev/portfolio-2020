import React from "react";
import { Container } from "@material-ui/core";

import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Achievements from "../components/Achievements";

export default function AboutPage() {
  return (
    <Container>
      <Experiences />
      <Education />
      <Achievements />
    </Container>
  );
}
