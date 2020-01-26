import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
import Global from "./global"

const LayoutContainer = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const StickyFooter = styled(Footer)`
  margin-top: auto;
`

const Body = styled.div`
  padding: 10px;

  /* SP表示 */
  @media screen and (max-width: 1024px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  /* PC表示 */
  @media screen and (min-width: 1025px) {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 800px;
  }
`

const Layout = props => (
  <LayoutContainer>
    <Global />
    <Header />
    <Body>{props.children}</Body>
    <StickyFooter />
  </LayoutContainer>
)

export default Layout
