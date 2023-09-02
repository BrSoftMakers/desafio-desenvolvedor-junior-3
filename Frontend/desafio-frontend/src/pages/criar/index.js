import React, { useState } from "react";
import * as C from "./style";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";

export const CriarPost = () => {
    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const timeElapsed = Date.now();
    const dataAtual = new Date(timeElapsed);

    const [dadosPost, setDadosPost] = useState({
        titulo: "",
        artigo: "",
        id_usuario_insercao: usuario.id,
        usuario_insercao: usuario.nome,
        dataCreatedAt: dataAtual,
        dataUpdatedAt: null
    });

    async function postar() {
        fetch(process.env.REACT_APP_HOST+":8090/posts",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dadosPost)
        })
        .then((resp)=>{
            if(resp.status === 200 || resp.status === 201){
                alert("Publicado com sucesso!")
                navigate("/posts");
            }
        })
    }

    return (
        <C.Container>
            <Header />
            <C.Post>
                <div>
                    <label>Titulo:</label>
                    <input value={dadosPost.titulo} onChange={(e)=> setDadosPost({...dadosPost, titulo: e.target.value})}/>
                </div>
                <div>
                    <label>Artigo: </label>
                    <textarea value={dadosPost.artigo} onChange={(e)=> setDadosPost({...dadosPost, artigo: e.target.value})}/>
                </div>
                <div>
                    <button onClick={postar}>Publicar</button>
                    <button onClick={() => navigate("/posts")}>Cancelar</button>
                </div>
            </C.Post>
        </C.Container>
    )
}