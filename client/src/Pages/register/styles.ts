import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100%;

h1{
    color: white;
    font-family: 'Inter';
}

form {
   text-align: center;
   margin-top: 120px;
   background-color: #8FBC8F;
   border-radius: 50px;
}

button {
  position: relative;
  bottom: 25px;
}

.buttonSair{
    position: absolute;
    right: 200px;
    top: 50px;
}

`