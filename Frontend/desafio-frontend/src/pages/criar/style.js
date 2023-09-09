import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`
export const Post = styled.div`
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #04B3C8;
    margin: 20px auto;
    border: none;
    border-radius: 10px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    textarea{
        width: 50%;
        height: 100px;
        margin: 5px;
        background-color: #E8E8E8;
        border: none;
        border-radius: 5px;
        outline: none;
        overflow: auto;
        resize: none;
    }
    input{
        width: 50%;
        height: 30px;
        margin: 5px;
        background-color: #E8E8E8;
        border: none;
        border-radius: 5px;
        outline: none;
    }
    input:focus{
        border-bottom: 1px solid #04B3C8;
        border-radius: 5px 5px 0 0 ;
    }
    label{
        color: #323232;
        margin: 0 5px;
        font-weight: bold;
    }
    button{
        background-color: #white;
        border: none;
        margin: 5px;
        height: 30px;
        border-radius: 10px;
        padding: 5px;
        color: #04B3C8;
        font-weight: bold;
    }
    button:hover{
        cursor: pointer;
        border: 2px solid #E8E8E8;
        background-color: #04B3C8;
        color: white;
    }
`