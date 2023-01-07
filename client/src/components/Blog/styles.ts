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

@media (max-width: 1230px){
 .con{
  
 }
  }

`

export const Container2 = styled.div<ContainerProps>`
background: url(${props => props.imgUrl}) no-repeat center;
background-color: #7B68EE;
background-size: cover;
height: 150px;
width: 300px;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 20px;
margin-top: 50px;
align-items: center;

&:hover{
  transform: scale(1.2);
  
}
h2{
  color: red;
  position: absolute;
}
h1{
  font-family: 'Inter';
  font-weight: 600;
  color: white;
  text-align: center;
  z-index: 99;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
  text-decoration:none;
  cursor: pointer;
  &:hover {
      color: #E0FFFF;
      text-shadow: 0 0 4px #fff;
     
    }
}

a{
  text-decoration: none;
  
}

svg{
  width: 20px;
  height: 20px;
  color: white;
  float: right;
  margin-right: 20px;
  margin-top: -5px;
  cursor: pointer;
  :hover{
    color: black;
  }
}
.icon{
  margin-left: 180px;
  cursor: pointer;
  
}
      
`


export const H1 = styled.h1`


  font-family: 'Inter';
  font-weight: 600;
  color: white;
  text-align: center;
  z-index: 99;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
  text-decoration:none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
      color: #E0FFFF;
      text-shadow: 0 0 4px #fff, 0 0 4px #ff0;
     
    }

`