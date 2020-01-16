import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  text-align: center;
  background-color: white;
`

const HeaderTitile = styled.h1`
  & > a {
    color: black;
    text-decoration: none;
  }
`

const Header = props => (
  <HeaderContainer>
    <HeaderTitile>
      <a href="/">ふじを録</a>
    </HeaderTitile>
  </HeaderContainer>
)

export default Header
