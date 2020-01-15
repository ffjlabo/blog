import React from "react"
import styled from "styled-components"

const Item = props => (
  <ItemContainer>
    <h2>
      {props.title}
      <Date>{props.date}</Date>
    </h2>
    <p>{props.abstract}</p>
  </ItemContainer>
)

const ItemContainer = styled.div`
  margin: 10px auto;
  border-bottom: dashed #000000 3px;
`

const Date = styled.span`
  margin-left: 10px;
`

export default Item
