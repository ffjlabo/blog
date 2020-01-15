import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  text-align: center;
  background-color: white;
`

const Header = props => (
  <HeaderContainer>
    <h1>ふじを録</h1>
  </HeaderContainer>
)

export default Header
