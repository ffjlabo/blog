import React from "react"
import styled from "styled-components"

const Item = props => (
  <ItemContainer>
    <ItemBody>
      <h2>
        {props.title}
        <Date>{props.date}</Date>
      </h2>
      <p>{props.abstract}</p>
    </ItemBody>
  </ItemContainer>
)

const ItemContainer = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f1f3;
  box-shadow: 10px 10px 12px rgba(204, 204, 204, 0.5),
    -10px -10px 12px rgba(255, 255, 255, 0.5);
`

const ItemBody = styled.div`
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(204, 204, 204, 0.5);
  padding: 10px;
  margin: 10px;
`

const Date = styled.span`
  margin-left: 10px;
`

export default Item
