import styled from 'styled-components';

export const Container = styled.section`
    padding:0;
margin:50px;
position:relative;
svg{
    width: 25px;
    height: 25px;
    position:absolute;
    top:22px;
    left:10px;
    margin-right: 10px;
}

input::placeholder {
    color: red;
}

label{
    position:absolute;
    top:-25px;
    left:30px;
    font-size:14px;
    color: white;
    font-size: 20px;
}
h1{
    font-family:'Inter';
    
}


input{
outline:none;
 border-radius: 50px;
 height:40px;
 width:250px;
 padding:14px 50px;
 border: 1px solid #A2CAFF;
 font-size:14px;
 
}
span{
    position:relative;
    top:-40px;
    color:red;
}
div{
    height:0px;
}



input::placeholder{
    color:#82B2B7;
    transition:250ms ease-in-out;
   

}
input::hover{
    border:1px solid #78b2FF
    &::placeholder{
        color:8A8A8A; 
    } 
}
input:focus{
    border: 1px solid green;
    &::placeholder{
        color:#1D1D1D; 
    } 
}

@media (max-width:500px){
    input{
        width: 150px;
    }
}

@media (max-width:440px){
    input{
        width: 100px;
    }
}
`
