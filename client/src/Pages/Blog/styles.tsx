import styled from "styled-components"

export const Container = styled.div`
display: flex;
height: 100%;

h1{
    color: white;
    font-family: 'Inter';
}

form {
   text-align: center;
   margin: 50px auto;
}

button {
  position: relative;
  bottom: 0px;
  margin-left: 30px;
}

.text {
    display: block;
    outline:none;
 border-radius: 50px;
 height:150px;
 width:250px;
 padding:14px 50px;
 border: 1px solid #A2CAFF;
 font-size:14px;
 margin-left: 60px;
 
 
}
.label {
   
    
    font-size:14px;
    color: white;
    font-size: 20px;

    
}


.buttonSair{
    position: absolute;
    right: 200px;
    top: 50px;
}

.span {
   
    position:relative;
    top:-40px;
    color:red;
    
}

@media (max-width: 930px){
    .buttonSair{
    top: 0px;
}

}

@media (max-width: 500px){
    svg{
    margin-left: 30px;
}
label,span{
    font-size: 14px;
    margin-left: 15px;
}
}

@media (max-width: 440px){
    svg{
    margin-left: 0px;
}
.text{
    width: 150px;
}
}

`