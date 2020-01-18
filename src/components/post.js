import React from "react"
import styled from "styled-components"

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f1f3;
  box-shadow: 10px 10px 12px rgba(204, 204, 204, 0.5),
    -10px -10px 12px rgba(255, 255, 255, 0.5);
`

const PostBody = styled.div`
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(204, 204, 204, 0.5);
  padding: 10px;
  margin: 10px;
`

const Post = ({ className, title, html }) => (
  <PostContainer>
    <PostBody dangerouslySetInnerHTML={{ __html: html }}></PostBody>
  </PostContainer>
)

export default Post
