import "../App.css";
import '../index.css';
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./Counter";
import { Jetton } from "./Jetton";
import { TransferTon } from "./TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./styled/styled";
import { useTonConnect } from "../hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import 'react-icons/bs';
import {  BsArrowLeftCircle, BsCart3, BsFillWalletFill, BsHeart } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";


const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
   position: fixed;
   font-family:'Lexend';

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

function checkout() {
  const { network } = useTonConnect();

  return (
    <StyledApp >
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
           <a href="#/home" style={{color:'black', textDecoration:'none'}}> <BsArrowLeftCircle style={{color: 'rgb(46, 172, 219)',zoom:'150%'}}/></a>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          <Counter />
          <TransferTon />
         
        </FlexBoxCol>
      </AppContainer>

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
  );
}

export default checkout;
