import React from "react"
import styled from "styled-components"
import Link from "./link"

const HeaderContainer = styled.header`
  text-align: center;
  background-color: white;
  width: 100%;
`

const Titile = styled.h1`
  font-weight: 200;
`

const Header = props => (
  <HeaderContainer>
    <Link to="/">
      <Titile>ふじを録</Titile>
    </Link>
  </HeaderContainer>
)

export default Header
