import React, { useEffect, useState } from 'react'
import { Box, Heading, Stack, Flex, Button, Textarea } from '@chakra-ui/react'
import CustomInput from './CustomInput'
import { getPostById, updatePost } from '../services/post'
import { useParams } from 'react-router-dom'

export default function editPostPage () {
  const { id } = useParams()
  const [post, setPost] = useState({
    title: '',
    demo: '',
    content: ''
  })

  useEffect(() => {
    getPostById(id)
      .then((res) => {
        setPost(res.data.post)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePost({ id, ...post })
    window.location.reload()
  }

  return (
    (post.title !== '')
      ? <Box>
        <Flex justifyContent='center'>
          <Heading>Editar Post</Heading>
        </Flex>
        <Stack spacing={8}>
          <CustomInput
            name='title'
            label='Título'
            value={post.title}
            onChange={handleChange}
          />
          <CustomInput
            name='demo'
            label='Demo'
            value={post.demo}
            onChange={handleChange}
          />
          <Textarea
            name='content'
            label='Conteúdo'
            value={post.content}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Editar</Button>
        </Stack>
      </Box>
      : <Box>
        <Flex justifyContent='center'>
          <Heading>Carregando...</Heading>
        </Flex>
      </Box>
  )
}
