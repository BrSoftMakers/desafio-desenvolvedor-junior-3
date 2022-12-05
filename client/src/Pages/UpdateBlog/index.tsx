import { useContext, useState } from "react"
import { PostContext } from "../../provider/post"
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputBlog } from "../../interfaces/Input";
import api from "../../services/api";
import { toast } from 'react-toastify'
import { Container } from "./styles";
import { Formik, Form, Field } from "formik";
import { Input } from "../../components/Input";
import { BlogData, BlogInterface } from "../../interfaces/Blog";
import { Header } from "../../components/Header";


export function UpdateBlog() {

    const { post } = useContext(PostContext)
    const [postAll] = useState<BlogInterface>(post)

    const initialValues: InputBlog = { title: "", img: "", post: "" }
    const navigate = useNavigate();
    const submit = (data: BlogData) => {
        const result = {
            title: data.title === initialValues.title ? postAll.title : data.title,
            img: data.img === initialValues.img ? postAll.img : data.img,
            post: data.post === initialValues.post ? postAll.post : data.post
        }

        api.put(`posts/${postAll.id}`, result, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        ).then((res) => {
            navigate("/dashboard")
            toast.success("Post Atualizado com sucesso!")
        }).catch((err) => {
            console.log(err)
            toast.error("Post não foi atualizado, por favor tente novamente mais tarde")
        })
    }

    function out() {
        navigate("/dashboard")
    }
    return (
        <>
         <Header/>
         <Container>
           
           <Formik
               initialValues={initialValues}
               onSubmit={submit}
           >
               {({ errors }) => (
                   <Form>
                       <h1>Atualizar Blog</h1>
                       <Input
                           label="Titulo"
                           type="text"
                           placeholder={postAll.title}
                           name="title"
                           error={errors.title}
                       />
                       <Input
                           label="Link da Imagem"
                           type="text"
                           placeholder={postAll.img}
                           name="img"
                           error=""
                       />
                       <div className="lab">

                           <label className="label">Post</label>
                           <span className="span">{errors.post}</span>
                       </div>


                       <Field placeholder={postAll.post} className="text" as="textarea" name="post" />

                       <Button size={true} whiteSchema={false}>Atualizar</Button>
                   </Form>
               )}

           </Formik>
       </Container>
        </>
        
    )
}