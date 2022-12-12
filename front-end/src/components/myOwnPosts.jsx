import React, { Fragment, useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Stack,
  Flex,
  Button
} from '@chakra-ui/react'
import PostCard from './PostCard'
import { useHistory } from 'react-router-dom'
import { getUserByToken, getPostsByUserId, deletePost } from '../services/post'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export default function MyOwnPosts () {
  const history = useHistory()
  const [myPosts, setMyPosts] = useState([])

  const handleCardClick = (id) => {
    history.push(`/post/${id}`)
  }
  useEffect(() => {
    getUserByToken().then((res) => {
      getPostsByUserId(res.data.payload.id).then((res) => {
        setMyPosts(res.data)
      })
    })
  }, [])

  return (
    <Box>
      <Flex justifyContent='center'>
        <Heading>Meus Posts</Heading>
      </Flex>
      <Stack spacing={8}>
        {myPosts.map((post) => (
          <Fragment key={post.id}>
            <PostCard key={post.id} {...post} handleCardClick={handleCardClick} />
            <Flex justifyContent='center'>
              <Button
                leftIcon={<EditIcon />}
                colorScheme='blue'
                onClick={ () => { history.push(`/editar-post/${post.id}`) } }
              >
                Editar
              </Button>
              <Button
                leftIcon={<DeleteIcon />}
                colorScheme='red'
                onClick={() => {
                  deletePost(post.id).then((res) => {
                    window.location.reload()
                  })
                }}
              >
                Deletar
              </Button>
            </Flex>
          </Fragment>

        ))}
      </Stack>
    </Box>
  )
}
