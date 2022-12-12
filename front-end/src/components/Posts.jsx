import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { Box, Heading, Stack, Flex } from '@chakra-ui/react'
import { getPosts } from '../services/post'
import { useHistory } from 'react-router-dom'

export default function PostsPage () {
  const history = useHistory()
  const [postsGlobais, setPostsGlobais] = useState([])
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPostsGlobais(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleCardClick = (id) => {
    history.push(`/post/${id}`)
  }

  return (
    <Box>
      <Flex justifyContent='center'>
        <Heading>Posts Globais</Heading>
      </Flex>
      <Stack spacing={8}>
        {postsGlobais.map((post) => (
          <PostCard key={post.id} {...post} handleCardClick={handleCardClick} />
        ))}
      </Stack>
    </Box>
  )
}
