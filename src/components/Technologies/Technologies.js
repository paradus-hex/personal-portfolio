import React from "react";
// import { DiFirebase, DiReact, DiZend, DiJavascript1 } from "react-icons/di";
import { FaLaptopCode, FaReact, FaCogs, FaCubes } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
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
        <FaLaptopCode size="3rem" />
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
        <FaCogs size="3rem" />
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
        <FaCogs size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Next.js
            <br />
            Jest
            <br />
            Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>{" "}
      <ListItem>
        <FaCogs size="3rem" />
        <ListContainer>
          <ListTitle>Platforms</ListTitle>
          <ListParagraph>
            Next.js
            <br />
            Jest
            <br />
            Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
