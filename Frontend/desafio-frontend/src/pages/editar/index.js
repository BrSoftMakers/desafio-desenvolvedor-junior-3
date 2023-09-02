import React, { useEffect, useState } from "react";
import * as C from "./style";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";

export const EditarPost = () => {
    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const idPost = localStorage.getItem("idPost");

    const timeElapsed = Date.now();
    const dataAtual = new Date(timeElapsed);

    // formata a data na hora de exibir as postagens
    function dataMask(data){
        var dataHora = new Date(data);
    
        var dia = dataHora.getUTCDate();
        var mes = dataHora.getUTCMonth() + 1;
        var ano = dataHora.getUTCFullYear();
        var horas = dataHora.getHours();
        var minutos = dataHora.getMinutes();
    
        var dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
        return dataHoraFormatada;
    }

    const [dadosPost, setDadosPost] = useState({
        titulo: "",
        artigo: "",
        id_usuario_insercao: usuario.id,
        usuario_insercao: usuario.nome,
        dataCreatedAt: dataAtual,
        dataUpdatedAt: null
    });

    useEffect(()=>{
        async function fetchPost(){
            fetch(`http://localhost:8090/posts/${idPost}`)
            .then((resp)=> resp.json())
            .then((data)=> setDadosPost(data))
        }
        fetchPost();
    },[])

    async function editarPost() {
        fetch(`http://localhost:8090/posts/${idPost}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: dadosPost.id,
                titulo: dadosPost.titulo,
                artigo: dadosPost.artigo,
                id_usuario_insercao: dadosPost.id_usuario_insercao,
                usuario_insercao: dadosPost.usuario_insercao,
                dataCreatedAt: dadosPost.dataCreatedAt,
                dataUpdatedAt: dataAtual
            })
        })
        .then((resp)=>{
            if(resp.status === 200 || resp.status === 201){
                alert("Editado com sucesso!")
                navigate("/posts");
            }
        })
    }

    return (
        <C.Container>
            <Header />
            <C.Post>
                <div>
                    <label>Autor: {usuario.nome}</label>
                    <label>Criado: {dataMask(dadosPost.dataCreatedAt)}</label>
                </div>
                <div>
                    <label>Titulo:</label>
                    <input value={dadosPost.titulo} onChange={(e)=> setDadosPost({...dadosPost, titulo: e.target.value})}/>
                </div>
                <div>
                    <label>Artigo: </label>
                    <textarea value={dadosPost.artigo} onChange={(e)=> setDadosPost({...dadosPost, artigo: e.target.value})}/>
                </div>
                <div>
                    <button onClick={editarPost}>Salvar</button>
                    <button onClick={() => navigate("/posts")}>Cancelar</button>
                </div>
            </C.Post>
        </C.Container>
    )
}