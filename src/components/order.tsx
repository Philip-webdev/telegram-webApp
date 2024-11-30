import { BsHeart, BsFillWalletFill, BsCart3 } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "./styled/styled";

const StyledApp = styled.div`
  background-color: whitesmoke;
  color: black;
  
  

 
  @media (prefers-color-scheme: dark) {
    background-color:  rgb(29, 40, 58);
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;
function order(){
    return(
        <div style={{ width: '100%'}}>
            <StyledApp style={{ width: '100%'}}>
            <div style={{width:'100px', height:'100px'}}>
                <p style={{textAlign:'center'}}><img src="https://ouch-cdn2.icons8.com/oTJ6sjphrc0x6AmAo_Q04L_Hohd9QmY_E-gOevGOhJU/rs:fit:368:397/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODAw/LzE4ZGEzMThhLTdi/OTItNGFjNi05YmVh/LTg2YzBmMGVkZWNl/ZC5wbmc.png"/>
                </p>
     </div>
     <div style={{right:'0.1%', bottom:'0%', display:'flex',justifyContent:'space-evenly' ,height:'fit-content',background:'#e8e8e8', width:'100%', paddingBottom:'10px', paddingRight:'10px',position:'fixed', borderRadius:'7px'}}>
            <a href='#/fav' style={{color:'black', textDecoration:'none'}}> 
            <Button  style={{  fontFamily: 'Lexend' ,  marginLeft:'20px',bottom:'0%', marginRight:'27px', background:'none', color:"black"}}>
            <BsHeart/>  <p style={{zoom:'80%'}}>favs</p> </Button></a>
            <a href='#/Checkout' style={{color:'black', textDecoration:'none'}}> <Button  style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'30px', background:'none', color:"black"}}><BsFillWalletFill/>
            <p style={{zoom:'80%'}}>wallet</p></Button></a>
            <a href='#/orders' style={{color:'black', textDecoration:'none'}}>  <Button style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'27px', background:'none', color:"black"}}><BsCart3/>
              <p style={{zoom:'80%'}}>orders</p></Button></a> <a href='#/task' style={{color:'black', textDecoration:'none'}}><Button  style={{ fontFamily: 'Lexend' ,bottom:'0%', background:'none', color:"black"}}><FaGamepad/>
              <p style={{zoom:'80%'}}>Games</p> </Button></a>
            </div>
     </StyledApp>
     </div>
    );
}

export default order;