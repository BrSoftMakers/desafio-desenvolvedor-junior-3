import React from 'react'
import MyOwnPosts from './myOwnPosts'
import PostCreator from './postCreator'

export default function MyPostsPage () {
  return (
    <>
      <PostCreator />
      <MyOwnPosts />
    </>
  )
}
