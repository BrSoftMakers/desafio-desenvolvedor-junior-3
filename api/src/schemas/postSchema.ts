import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { schemaPost } from '../interfaces/post'

export const postCreateSchema: SchemaOf<schemaPost> = yup.object().shape({
  title: yup.string().required(),
  post: yup.string().required()
})

export const postupdateSchema: SchemaOf<schemaPost> = yup.object().shape({
    title: yup.string().required(),
    post: yup.string().required()
  })