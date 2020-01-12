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

// export default props => (
//   <div className="item-main">
//     <h2>
//       {props.title}
//       <span>{props.date}</span>
//     </h2>
//     <p>{props.abstract}</p>
//     <style jsx>{`
//       .item-main {
//         margin: 10px auto;
//         border-bottom: dashed #000000 3px;
//       }
//       /* タグ自身にcssを当てても、このコンポーネント内に存在するタグに対してしか反応しない */
//       /* このコンポーネントに閉じたcss設定をすることができる */
//       span {
//         margin-left: 10px;
//       }
//     `}</style>
//   </div>
// )
