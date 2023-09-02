import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%
`
export const Postagem = styled.div`
    width: 90%;
    margin: 10px auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #04B3C8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1,
    p{
        color: #323232;
        text-align: start;
    }
    &:hover{
        cursor: pointer;
        background-color: #E8E8E8;
    }
    button{
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 10px;
        background-color: #04B3C8;
        color: #FFF;
        margin: 5px;
    }
    button:hover{
        cursor: pointer;
    }
`

export const PostagemAberta = styled.div`
    width: 90%;
    margin: 10px auto;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    color: #323232;
    label{
        font-weight: bold;
    }
    .cabecalho{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 10px;
        border-bottom: 1px solid #04B3C8;
    }
    p{
        text-align: start;
    }
    button{
        margin: auto;
        width: 100px;
        height: 30px;
        border: none;
        background-color: #04B3C8;
        border-radius: 10px;
        color: white;
    }
    button:hover{
        cursor: pointer;
    }
`