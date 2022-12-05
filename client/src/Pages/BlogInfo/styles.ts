import styled from 'styled-components';



export const Container = styled.div`
display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;

  width: 100%;
  
img{
    text-align: center;
    width: 100%;
    height: 300px;
    margin-top: 50px;
    border-radius: 20px;
    margin-right: 50px;
    margin-left: 50px;
    background-color: #7B68EE;
    cursor: pointer;
    
}
.user{
    flex-flow: row wrap;
    color: white;
    
}
h1{ 
    width: 100%;
    text-align: center;
    font-family: 'Inter';
    font-size: 35px;
    color: #FFF0F5;
    font-weight: 600;
    /* margin-right: ; */
   
}

p { 
    width: 100%;
    font-size: 25px;
    line-height:30px;
    color: #FFF0F5;
    text-align: center;
    
}

button{
    float: right;
}

h3{ 

    color:#FFF0F5
}

@media (max-width: 1000px){
        
    p{
        width: 800px;
        font-size: 15px;
        
    }
    button{
        display: none;
    }
}

@media (max-width: 800px){
        
        p{
            width: 500px;
            font-size: 15px;
            margin-left: 20px;
        }
    }

    @media (max-width: 600px){
        
        p{
            width: 500px;
            font-size: 15px;
            margin-left: 10px;
        }
    }

    @media (max-width: 520px){
        
        p{
            width: 400px;
            font-size: 10px;
            
        }
    }

@media (max-width: 380px){
    margin-left: 15px;
    h1{ 
        
        font-size: 20px;
        width: 330px;
    }
    h3{
        font-size: 15px;
       margin-left: 40px;
    }
    p{
        width: 300px;
    }
}

`

