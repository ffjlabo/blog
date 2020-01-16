import React from "react"
import styled from "styled-components"
import icon from "../images/icon.jpg"

const FooterContainer = styled.footer`
  text-align: center;
  background-color: white;
`

const FooterLink = styled.a`
  text-decoration: none;
  img {
    width: 50px;
    height: 50px;
  }
`

const Footer = props => (
  <FooterContainer>
    <FooterLink href="/">
      <img src={icon} />
    </FooterLink>
  </FooterContainer>
)

export default Footer
