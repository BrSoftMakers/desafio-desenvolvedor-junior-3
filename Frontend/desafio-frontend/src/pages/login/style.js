import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

export const Apresentacao = styled.div`
    background-color: #04B3C8;
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 40px;
        color: #323232;
    }
    p{
        color: #FFF;
        width: 80%;
        margin: 10px;
    }
    button{
        width: 150px;
        height: 30px;
        border-radius: 10px;
        border: none;
        background-color: rgba(232, 232, 232, 0.5);
    }
    button label{
        color: #323232;
        opacity: 1;
        font-weight: bold;
    }
    label:hover,
    button:hover{
        cursor: pointer;
        background-color: white;
    }
`
export const Acesso = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: #323232;
    }
    form{
        display: flex;
        div{
            margin: 5px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-around;
        }
        input{
            width: 100%;
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
    }
    .buttons{
        button{
            background-color: #04B3C8;
            border: none;
            margin: 5px;
            height: 30px;
            border-radius: 10px;
            padding: 5px;
            color: #FFF;
            font-weight: bold;
        }
        button:hover{
            cursor: pointer;
            border: 1px solid #04B3C8;
            background-color: #E8E8E8;
            color: #04B3C8;
        }
    }
`