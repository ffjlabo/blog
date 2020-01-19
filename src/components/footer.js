import React from "react"
import styled from "styled-components"
import Link from "./link"
import icon from "../images/icon.jpg"

const FooterContainer = styled.footer`
  text-align: center;
  background-color: white;
`

const FooterIcon = styled.img.attrs({
  src: icon,
  alt: "",
})`
  width: 50px;
  height: 50px;
`

const Footer = ({ className }) => (
  <FooterContainer className={className}>
    <Link path="/">
      <FooterIcon />
    </Link>
  </FooterContainer>
)

export default Footer
