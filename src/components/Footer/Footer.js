import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:8801706373929">+8801706373929</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yaseen.nur.taz@g.bracu.ac.bd">
            yaseen.nur.taz@g.bracu.ac.bd
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Hope to hear from you soon!</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/paradus-hex">
          <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/yaseen-nur-845a87218/">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/hex_paradus">
          <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
