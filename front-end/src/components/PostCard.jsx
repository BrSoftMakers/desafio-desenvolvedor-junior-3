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

export default function PostCard ({ id, title, demo, createdAt, updatedAt, authorName, tags, handleCardClick }) {
  const randomNum = Math.floor(Math.random() * 100)

  return (
    <Center py={6}>
      <Box
        maxW={'745px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        _hover={{ shadow: 'xl', cursor: 'pointer' }}
        onClick={() => handleCardClick(id)}
      >
        <Image
          h={'120px'}
          w={'full'}
          src= {`https://source.unsplash.com/random/?blogPost&${randomNum}`}
          objectFit={'cover'}
        />
        {tags && tags.length > 0 && (
          <Stack direction={'row'} spacing={-1} align={'center'} px={2} py={1}>
            {tags.map((tag) => (
              <Box
                key={tag}
                px={2}
                py={1}
                bg={useColorModeValue('gray.200', 'gray.700')}
                rounded={'full'}
                fontSize={'sm'}
                fontWeight={500}
                color={useColorModeValue('gray.700', 'white')}
              >
                {tag}
              </Box>
            ))}
          </Stack>
        )}

        <Stack p={6} color={useColorModeValue('gray.700', 'gray.200')}>
          <Stack direction={'row'} align={'center'}>
            <Avatar
              src={`https://source.unsplash.com/random/?user&${randomNum}`}
              alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Author</Text>
              <Text color={'gray.500'}>{authorName}</Text>
            </Stack>
          </Stack>
          <Stack>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {title}
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'}>
              {demo}
            </Text>
          </Stack>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <Text fontSize={'sm'} color={'gray.500'}>
              {new Date(createdAt).toDateString()}
            </Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              {new Date(updatedAt).toDateString()}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

PostCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  authorId: PropTypes.string,
  authorName: PropTypes.string,
  demo: PropTypes.string,
  tags: PropTypes.array,
  handleCardClick: PropTypes.func
}
