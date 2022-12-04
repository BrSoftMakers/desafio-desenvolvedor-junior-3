import styled from 'styled-components';

interface ContainerProps {
   imgUrl?: string;
  }

export const Container = styled.div<ContainerProps>`

background: url(${props => props.imgUrl}) no-repeat center;
background-size: cover;
height: 300px;
width: 300px;
display: flex;
border-radius: 20px;
margin-top: 30px;
cursor: pointer;
h1{
  font-family: 'Inter';
  font-weight: 600;
  color: white;
  text-align: center;
  margin-top: 150px;
  color: red;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 8px;
  
}

a{
  text-decoration: none;
  
}

svg{
  width: 30px;
  height: 30px;
  color: white;
  float: right;
  margin-right: 20px;
  margin-top: 5px;
  cursor: pointer;
}
.icon{
  margin-left: 180px;
  cursor: pointer;
}
      
`


