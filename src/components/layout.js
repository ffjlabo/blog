import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const LayoutContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

const StickyFooter = styled(Footer)`
  width: 100%;
  position: absolute;
  bottom: 0;
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
    <StickyFooter />
  </LayoutContainer>
)

export default Layout
