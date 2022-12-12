import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import CustomInput from './CustomInput'
import { MdTitle, MdDescription } from 'react-icons/md'
import { createPost } from '../services/post'

export default function PostCreator () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errors, setErrors] = React.useState({
    title: false,
    content: false,
    demo: false
  })
  const clearForm = () => {
    setForms({
      title: '',
      content: '',
      demo: ''
    })
  }
  const [forms, setForms] = React.useState({
    title: '',
    content: '',
    demo: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForms({ ...forms, [name]: value })
  }
  const handleSubmit = async (e) => {
    setIsSubmitting(true)
    e.preventDefault()
    const { title, content, demo } = forms
    const titleError = title.length < 4
    const contentError = content.length < 4
    const demoError = demo.length < 4
    setErrors({
      title: titleError,
      content: contentError,
      demo: demoError
    })
    if (!titleError && !contentError && !demoError) {
      await createPost(forms)
      clearForm()
      setIsSubmitting(false)
    } else { setIsSubmitting(false) }
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" leftIcon={<AddIcon />} width="100%">
        Create Post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <VStack spacing={4}>
          <CustomInput
            isInvalid={errors.title}
            onChange={handleChange}
            value={forms.title}
            isDisabled={isSubmitting}
            name="title"
            label="Title"
            leftIcon={<MdTitle />}
            placeholder="Digite aqui o título do post"
          />
          <CustomInput
            isInvalid={errors.demo}
            onChange={handleChange}
            value={forms.demo}
            isDisabled={isSubmitting}
            name="demo"
            label="Descrição"
            leftIcon={<MdDescription />}
            placeholder="Digite aqui a descrição do post"
          />
          <Textarea
            isInvalid={errors.content}
            isRequired
            onChange={handleChange}
            value={forms.content}
            isDisabled={isSubmitting}
            placeholder="Digite aqui o conteúdo do post"
            name="content"
            label="Content"
          />
          </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              isLoading={isSubmitting}
            >
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
