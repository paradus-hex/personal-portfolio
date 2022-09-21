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
      I am a React Developer with Fullstack Experience in M/PERN Stack (MySQL/MongoDB/PostgreSQL, Express, React and Node.js).
      </SectionText>
      <Link href="#footer">
        <Button>Connect with me</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
