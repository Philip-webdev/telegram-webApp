import { useState } from "react";
import 'react-icons/bs';
import { BsArrowLeftCircle, BsCart3, BsFillWalletFill, BsHeart } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "./styled/styled";



const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
  position: fixed;
 
  @media (prefers-color-scheme: dark) {
    background-color:  rgb(29, 40, 58);
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;
function miner(){


    const points = document.getElementById('')?.innerText;
    const [defaultValue, setValue] = useState('0');
    if (('localStorage' in window) && window['localStorage'] !== null) 
        
       
     
     
        {
            if (points != undefined){
        const result = {point: points}
        const value = setValue(result.point)
    
      //  localStorage.setItem('newPoint', value);
    
        }
    }

    return(
        <div style={{width:'100%'}}>
            <StyledApp style={{ width: '100%'}}>
            <em><p>coming soon</p></em>

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

export default miner;