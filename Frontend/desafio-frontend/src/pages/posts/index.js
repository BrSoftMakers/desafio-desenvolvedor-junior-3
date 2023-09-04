import React, { useEffect, useState } from "react";
import * as P from "./style";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";


export const Posts = () => {
    const user = JSON.parse(localStorage.getItem("usuario"));
    const navigate = useNavigate();
    const [postagens, setPostagens] = useState([]);
    const [postagem, setPostagem] = useState({});
    const [postAberto, setPostAberto] = useState(false);
    const [filtro, setFiltro] = useState({
        usuario: false,
        crescente: true
    })

    // formata a data na hora de exibir as postagens
    function dataMask(data) {
        var dataHora = new Date(data);

        var dia = dataHora.getUTCDate();
        var mes = dataHora.getUTCMonth() + 1;
        var ano = dataHora.getUTCFullYear();
        var horas = dataHora.getHours();
        var minutos = dataHora.getMinutes();

        var dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
        return dataHoraFormatada;
    }

    async function fetchData() {
        const token = localStorage.getItem("token");
        const response = await fetch(process.env.REACT_APP_HOST + `/posts/${filtro.usuario ? user.id : 0}/${filtro.crescente ? "asc" : "desc"}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
        })
        const data = await response.json();
        if (response.status === 401) {
            alert("Usuário não está logado!\n" + "Por favor realizar o Login para continuar!");
            navigate("/");
            localStorage.clear();
        } else {
            setPostagens(data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    function abrirPost(post) {
        setPostagem(post);
        setPostAberto(true);
    }

    async function deletarPost(post) {
        fetch(process.env.REACT_APP_HOST + `/posts/${post.id}`, {
            method: "DELETE"
        })
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Deletado!");
                    fetchData();
                }
            })
    }

    function abrirEditar(post) {
        navigate(`/post/${post.id}`);
        localStorage.setItem("idPost", post.id);
    }

    useEffect(() => {
        fetchData();
    }, [filtro])
    return (
        <P.Container>
            <Header />
            {!postAberto ? (
                <div style={{ width: "90%", display: "flex", alignItems: "center", justifyContent: "end", marginLeft: "10px", marginRight: "10px" }}>
                    <button style={{ border: "none", borderRadius: "10px", marginRight: "10px" }} onClick={() => { setFiltro({ ...filtro, crescente: !filtro.crescente }) }}><img alt="filtro" src={filtro.crescente ? "/images/ordenar_menor.png" : "/images/ordenar_maior.png"} style={{ height: "30px", width: "30px" }} /></button>
                    <input type="checkbox" style={{ margin: "5px" }} checked={filtro.usuario ? true : false} onChange={() => { setFiltro({ ...filtro, usuario: !filtro.usuario }) }} />
                    <label>Minhas postagens</label>
                </div>
            ) : null}
            {postAberto ? (
                <P.PostagemAberta>
                    <div className="cabecalho">
                        <h2>{postagem.id} - {postagem.titulo}</h2>
                        <label>Autor: {postagem.autor} Publicado: {dataMask(postagem.dataCreatedAt)}</label>
                    </div>
                    <p>{postagem.artigo}</p>
                    <button onClick={() => setPostAberto(false)}>Voltar</button>
                </P.PostagemAberta>
            ) : (
                postagens.map((post) => {
                    return (
                        <P.Postagem key={post.id} onDoubleClick={abrirPost.bind(this, post)}>
                            <h3>{post.id} - {post.titulo}</h3>
                            <h5>Autor: {post.usuario_insercao} / Publicado: {dataMask(post.dataCreatedAt)}</h5>
                            {post.id_usuario_insercao === user.id ? (
                                <div>
                                    <img alt="editar" src="/images/editar.png" onClick={abrirEditar.bind(this, post)} />
                                    <img alt="lixeira" src="/images/excluir.png" onClick={deletarPost.bind(this, post)} />
                                </div>
                            ) : null}
                        </P.Postagem>
                    )
                })
            )}
        </P.Container>
    )
}