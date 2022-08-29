import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
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
      <SectionText>
        I am a FullStack Developer (M/PERN stack). Currently engrossed
        in Machine learning (Scikit-learn), Deep learning and NLP (python). An
        avid Chess Enthusiast. And a 3rd year CS undergrad at BRAC Univeristy.
      </SectionText>
      <Link href="#footer">
        <Button>Connect with me</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
