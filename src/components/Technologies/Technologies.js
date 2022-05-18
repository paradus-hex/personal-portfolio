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
      As a frontend developer I am well acquainted with the frontend
      Technologies.
      <br /> Artificial Intelligence fascinates me and I have started to slowly
      dig into it. And as per my plan to go fullstack, I have also started to
      pick up backend technologies.
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
            Java
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
            Jest
            <br />
            Material UI
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
          <ListParagraph>MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
