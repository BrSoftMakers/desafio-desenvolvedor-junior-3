import React from "react";
import * as H from "./sttyle";

export const Header = () => {
    return (
        <H.Container>
            <h1>Blog</h1>
            <H.Button>Postagens</H.Button>
            <H.Button>Criar</H.Button>
            <H.Button>Minhas Postagens</H.Button>
            <H.Button style={{color: "red"}}>Sair</H.Button>
        </H.Container>
    )
}