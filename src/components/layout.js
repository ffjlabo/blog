import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const LayoutContainer = styled.div`
  margin: 0px;
`

const LayoutBody = styled.div`
  @media screen and (max-width: 1024px) {
    padding: 10px;
    border: solid #000000 3px;
  }

  @media screen and (min-width: 1025px) {
    padding: 10px;
    margin: 30px 250px;
    min-width: 700px;
    border: solid #000000 3px;
  }
`

const Layout = props => (
  <LayoutContainer>
    <Header />
    <LayoutBody>{props.children}</LayoutBody>
    <Footer />
  </LayoutContainer>
)

export default Layout
