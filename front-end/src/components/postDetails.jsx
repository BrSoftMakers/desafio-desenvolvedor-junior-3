import React from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { getPostById } from '../services/post'
import { useParams } from 'react-router-dom'

export default function PostDetails () {
  const { id } = useParams()
  const [post, setPost] = React.useState({})

  React.useEffect(() => {
    getPostById(id)
      .then((res) => {
        console.log(res.data.post)
        setPost(res.data.post)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const { authorName, authorEmail, content, title, demo, createdAt, updatedAt } = post
  const createdAtDate = new Date(createdAt)
  const updatedAtDate = new Date(updatedAt)
  const randomNum = Math.floor(Math.random() * 100)

  return (
    <Center py={6}>
      <Box>
        <Image h={'520px'} w={'full'} src={`https://source.unsplash.com/random/?blogPost&${randomNum}`} objectFit={'cover'} />
        <Stack p={6} color={useColorModeValue('gray.700', 'gray.200')}>
          <Stack direction={'row'} align={'center'}>
            <Avatar src={`https://source.unsplash.com/random/?user&${randomNum}`} alt={'Author'} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={500}>{authorName}</Text>
              <Text color={'gray.500'}>{authorEmail}</Text>
            </Stack>
          </Stack>
          <Stack direction={'row'} justify={'space-between'} align={'center'} mt={1}>
            <Text fontSize={'sm'} color={'gray.500'}>
              {createdAtDate.toLocaleDateString()}
            </Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              {updatedAtDate.toLocaleDateString()}
            </Text>
          </Stack>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Text color={'gray.500'}>{content}</Text>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <Text fontWeight={600} color={'gray.700'}>
              Descrição
            </Text>
            <Text color={'gray.500'}>{demo}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

PostDetails.propTypes = {
  id: PropTypes.string
}.IsRequired
