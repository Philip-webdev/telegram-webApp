import 'react-icons/bs';
import styled from "styled-components";
import { Button } from "./styled/styled";



const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
  position: absolute;
 
  @media (prefers-color-scheme: dark) {
    background-color:  rgb(29, 40, 58);
    color: white;
  }
  min-height: 100vh;
  padding: 20px 30px;
`;
const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
function Frontier(){


    return(
        <div style={{width:'100%'}}>
         
           <div>
            <h1 style={{textAlign:'center', fontSize:'larger'}}>Welcome to GroTon</h1>
            <p style={{textAlign:'center'}}>Telegram's first fiat and web3 
                Grocery Market</p>
           </div>
<p style={{textAlign:'center'}}><Button style={{textAlign:'center',margin:'auto', width:'50%'}}><a style={{textDecoration:'none', color:'white'}} href='#/home'>Open App</a></Button>
</p>       

        </div>
    );
}

export default Frontier;