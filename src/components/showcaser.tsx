import 'react-icons/bs';
import styled from "styled-components";
import { Button } from "./styled/styled";
import { url } from 'inspector';



const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
   
 
  @media (prefers-color-scheme: dark) {
    background-color:  rgb(29, 40, 58);
    color: white;
  }
  min-height: 90vh;
  padding: 20px 20px;
`;
const AppContainer = styled.div`
  width: 100%;
  height:100%;
  margin: 0;
`;
function Frontier(){


    return(
        <div >
        
         <AppContainer >
           <div style={{color:'white'}}>
            <h1 style={{textAlign:'center', fontSize:'larger'}}>Welcome to GroTon</h1>
            <p style={{textAlign:'center'}}>Telegram's first fiat and web3 
           Grocery Market</p>
           </div>
<p style={{textAlign:'center'}}><Button style={{textAlign:'center',margin:'auto', width:'50%'}}><a style={{textDecoration:'none', color:'white'}} href='#/home'>Open App</a></Button>
</p>    
   
</AppContainer>
        </div>
    );
}

export default Frontier;