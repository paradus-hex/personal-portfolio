import React from "react";
// import { DiFirebase, DiReact, DiZend, DiJavascript1 } from "react-icons/di";
import {
  FaLaptopCode,
  FaReact,
  FaCogs,
  FaCubes,
  FaToolbox,
  FaTh,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVisualstudiocode,
  SiNetlify,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am well acquainted with the frontend
      Technologies. I plan to go fullstack and therefore, I am picking up backend technologies.
      <br /> Artificial Intelligence fascinates me and I have started my journey in AI with machine learning in Python. 
    </SectionText>
    <List>
      <ListItem>
        <SiTypescript size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Javascript
            <br />
            Python
            <br />
            Typescript
            <br />
            C
            <br />
            Bash
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            React.js
            <br /> React-Redux
            <br /> React-Router
            <br /> React-Query
            <br /> Storybook
            <br /> Babel
            <br /> Eslint
            <br /> Scikit Library
            <br /> Pandas Dataframe
            <br /> Matplotib
            <br /> Numpy
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextdotjs size="3rem" />
        <ListContainer>
          <ListTitle>FrameWorks</ListTitle>
          <ListParagraph>
            Next.js
            <br />
            Express
            <br />
            Jest
            <br />
            Material UI
            <br />
            Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiVisualstudiocode size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            VSCode
            <br />
            Notion
            <br />
            Git
            <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>{" "}
      <ListItem>
        <SiNetlify size="3rem" />
        <ListContainer>
          <ListTitle>Platforms</ListTitle>
          <ListParagraph>
            Firebase
            <br />
            Netlify
            <br />
            Vercel
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>MySQL</ListParagraph>
          <ListParagraph>PostgreSQL</ListParagraph>
          <ListParagraph>MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
