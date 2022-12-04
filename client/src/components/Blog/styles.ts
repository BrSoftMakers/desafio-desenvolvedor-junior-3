import styled from 'styled-components';

interface ContainerProps {
   imgUrl?: string;
  }


export const Container = styled.div`
width: 1500px;

.search{
  display: flex;
  justify-content: center;
}

.buttonAll{
  margin-right: 20px;
}

.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

`

export const Container2 = styled.div<ContainerProps>`
background: url(${props => props.imgUrl}) no-repeat center;
background-color: #7B68EE;
background-size: cover;
height: 300px;
width: 300px;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 20px;
margin-top: 30px;
align-items: center;

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
  cursor: pointer;
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


