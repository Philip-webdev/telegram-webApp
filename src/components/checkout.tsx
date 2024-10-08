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
import {  BsArrowLeftCircle } from "react-icons/bs";


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
  padding: 20px 20px;
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
    </StyledApp>
  );
}

export default checkout;
