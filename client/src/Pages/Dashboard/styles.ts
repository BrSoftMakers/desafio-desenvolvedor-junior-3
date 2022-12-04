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
    margin-bottom: -30px;
    margin-left: 150px;
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

`