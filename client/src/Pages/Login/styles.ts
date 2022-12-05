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
  margin-bottom: 25px;
}

h4 {
    margin-top: -20px;
    margin-bottom: 10px;
    color: white;
}

a { 
    width: 30px;
    height: 30px;
    text-decoration: none;
    color: black;

    border-radius: 8px;
}
a:hover{
    color: red;
}

@media (max-width:500px){
    form {
        float: left;
    }
}


`