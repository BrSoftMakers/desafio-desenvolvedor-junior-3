import { useState } from "react";
import NavBarHome from "../../components/navBar home/NavBarHome";
import './EditPost.css'
import blogFetch from "../../axios/config";


const EditPost = () => {

    const [oldTitle, setOldTitle] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [body, setBody] = useState('');

    const handleEditPost = async (e) => {
        e.preventDefault()
        
        try{
            await blogFetch.put(`/posts`,{
                oldTitle, 
                newTitle, 
                body
            }).then(()=> {
                alert('Edição feita com sucesso!')
                console.log(oldTitle, newTitle, body)
                /* window.location.assign("/home"); */
            })

        }catch(err){
            console.log(err)
        }

    }


    return(
        <>
            <NavBarHome/>
            <main className="editPost">
                <h1>Edit post</h1>
                <form action="" className="editForm">
                <input 
                    type="text" 
                    placeholder="Digite o titulo do post que você quer editar?" 
                    id="title" required 
                    onChange={(e) => setOldTitle(e.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder="Novo title" 
                    id="newTitle" required 
                    onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <textarea 
                    name="body" 
                    id="" 
                    cols="30" 
                    rows="10"
                    placeholder="Write here..."
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <div className="buttonBox">
                        <button type="submit" onClick={(e) => handleEditPost(e)}>Edit</button>
                    </div>
                </form>
            </main>
        </>
    )
};

export default EditPost;