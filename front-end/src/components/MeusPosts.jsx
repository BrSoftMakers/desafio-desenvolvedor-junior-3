import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { Box, Heading, Stack, Flex } from '@chakra-ui/react'
import { getPosts } from '../services/post'

export default function PostsPage () {
  const [postsGlobais, setPostsGlobais] = useState([])
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPostsGlobais(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Box>
      <Flex justifyContent='center'>
        <Heading>Posts Globais</Heading>
      </Flex>
      <Stack spacing={8}>
        {postsGlobais.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </Stack>
    </Box>
  )
}
