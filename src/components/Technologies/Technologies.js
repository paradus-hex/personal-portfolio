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
      Enter information my skills in front end webdevelopment and Artificial
      Intelligence
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
