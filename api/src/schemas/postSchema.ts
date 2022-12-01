import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { schemaPost } from '../interfaces/post'

export const postCreateSchema: SchemaOf<schemaPost> = yup.object().shape({
  post: yup.string().required().min(2).max(50)
})

export const postupdateSchema: SchemaOf<schemaPost> = yup.object().shape({
    post: yup.string().required()
  })