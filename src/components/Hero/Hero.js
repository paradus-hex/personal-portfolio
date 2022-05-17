import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi I am Yaseen.
        <br /> Welcome to my personal portfolio!
      </SectionTitle>
      <SectionText>This is not ready yet. I will fix this later</SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
