import React from "react"

export default props => (
  <div className="item-main">
    <h2>
      {props.title}
      <span>{props.date}</span>
    </h2>
    <p>{props.abstract}</p>
    <style jsx>{`
      .item-main {
        margin: 10px auto;
        border-bottom: dashed #000000 3px;
      }
      /* タグ自身にcssを当てても、このコンポーネント内に存在するタグに対してしか反応しない */
      /* このコンポーネントに閉じたcss設定をすることができる */
      span {
        margin-left: 10px;
      }
    `}</style>
  </div>
)
