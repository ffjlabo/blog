import React from "react"
import styled from "styled-components"
import icon from "../images/icon.jpg"

const FooterContainer = styled.footer`
  text-align: center;
`

const FooterIcon = styled.div`
  &::before {
    content: "";
    display: inline-block;
    background-image: url(${icon});
    background-size: contain;
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
`

const Footer = props => (
  <FooterContainer>
    <FooterIcon />
  </FooterContainer>
)

export default Footer
