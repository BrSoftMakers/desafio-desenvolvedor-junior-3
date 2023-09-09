import React from "react";
import * as H from "./sttyle";
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    function sair (){
        navigate("/");
        localStorage.clear();
    }

    return (
        <H.Container>
            <div style={{display: "flex", alignItems: "center", position: "fixed", top: "5px", right: "10px"}}>
                <label >{usuario.nome}</label>
                <H.Button onClick={sair} style={{ color: "red", margin: "0px 5px" }}>Sair</H.Button>
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>Blog</h1>
                <H.Button onClick={()=> navigate("/posts")}>Postagens</H.Button>
                <H.Button onClick={()=> navigate("/post/novo")}>Criar</H.Button>
            </div>
        </H.Container>
    )
}