import React from "react"
import styled from "styled-components"
import icon from "../images/icon.jpg"

const Item = props => (
  <ItemContainer>
    <ItemBody>
      <img src={icon} alt="" />
      <OverView>
        <Date>{props.date}</Date>
        <Title>{props.title}</Title>
        <div>{props.abstract}</div>
      </OverView>
    </ItemBody>
  </ItemContainer>
)

const ItemContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f1f3;
  box-shadow: 10px 10px 12px rgba(204, 204, 204, 0.5),
    -10px -10px 12px rgba(255, 255, 255, 0.5);
`

const ItemBody = styled.article`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(204, 204, 204, 0.5);
  padding: 10px;
  margin: 10px;
`

const OverView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Date = styled.div`
  font-weight: 200;
`

const Title = styled.h2`
  margin-top: 0;
  font-weight: 300;
`

export default Item
