import React from "react";
import { TimeLineData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am currently working as a fullstack developer at Reinforz, a NLP (Natural Language Processing) based startup from Dhaka, Bangladesh.
        <br />
        <br />
        I am deeply interested in AI (Artificial Intelligence) and I am
        currently working with Machine Learning models (Scikit-learn library),
        Deep Learning, and NLP(Natural Language Processing) in Python. I am also
        proficient in Data Science libraries in Python like NumPy, Matplotlib,
        and Pandas.
        <br />
        I am a third-year Computer Science and Engineering undergraduate student
        at BRAC University. 
      </SectionText>
    </Section>
  );
};

export default Timeline;
