import styled from "styled-components";
import React, { ReactNode } from "react"
import { IButtonProps } from "./index";



export const Container = styled.button<IButtonProps>`
    background-color: ${(props) => (props.whiteSchema ? '#F57117' : '#666699')};
    color: ${(props) => (props.whiteSchema? '#f5f5f5' : 'white')};
    width: ${(props) => (props.size? '120px' : '150px')};
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--kobi);
    font-family: 'Roboto Mono', monospace;
    margin-top: 16px;
    transition: 0.5s;
    cursor:pointer;
    :hover{
        border: 2px solid var(--purple-100);
        filter: brightness(0.9);
    }`