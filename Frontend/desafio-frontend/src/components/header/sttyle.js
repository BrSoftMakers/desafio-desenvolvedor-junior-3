import { styled } from "styled-components";

export const Container = styled.div`
    height: 20%;
    width: 100%;
    background-color: #04B3C8;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 40px;
        color: #323232;
        position: fixed;
        left: 10px;
    }
    h1:hover{
        cursor: default;
    }
    label{
        color: #323232;
        font-weight: bold;
    }
`

export const Button = styled.button`
    height: 20px;
    width: auto;
    margin: 10px;
    color: #FFF;
    font-weight: bold;
    background-color: transparent;
    border: none;
    &:hover{
        cursor: pointer;
        border-bottom: 1px solid #FFF;
    }
`