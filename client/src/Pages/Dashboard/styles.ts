import styled from "styled-components"

export const Container = styled.div`
.blog {
    width: 70%;
    flex-wrap: wrap;
    display: flex;
   justify-content: space-around;
   margin-top: 50px;
   margin: 40px auto;
}
h2{
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: 'Inter';
    color: white;
    font-weight: 300;
   
}

h1{
    font-family: 'Inter';
}

.buttonSair{
    float: right;
    margin-right: 80px;
}
.letter{
    color: white;
    background-color: red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    text-align: center;
    
}
img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
.letter2{
    position: relative;
    bottom: 15px;
    font-size: 50px;
    font-family: 'Inter';
}
.name{
    display: flex;
    margin-top: 70px;
    margin-left: 70px;
}
.nameAll{
    margin-left: 10px;
    color: white;
    font-family: 'Inter';
}
.buttonBlog{
    float: right;
    margin-right: 75px;
}

@media (max-width: 720px){
    .buttonSair{
        margin-top: -70px;
    }
    .buttonBlog{
        margin-top: -20px;
        display: flex;
    }

    @media (max-width: 380px){
    h1{
        font-size: 20px;
    }

    .buttonBlog{
        margin-right: 120px;
    }
    img,.letter{
        width: 70px;
        height: 70px;
    }
    .letter2{
        font-size: 30px;
        margin-top: 30px;
    }
    button{
        width: 100px;
        font-size: 10px;
        
    }
`