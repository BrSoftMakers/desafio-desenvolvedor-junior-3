import styled from "styled-components"

export const Titulo = styled.h2`
    width: 100%;
    padding: 10px;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '20px;'};
    text-align: top;
    margin: 0;
`