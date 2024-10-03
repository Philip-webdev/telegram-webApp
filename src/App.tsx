import "./App.css";
import { BsCalendar2, BsCalendarPlus, BsFillWalletFill, BsHeart, BsMinecart, BsStack, BsStackOverflow, BsStarFill, BsStars, BsWallet, BsWallet2, BsWalletFill} from 'react-icons/bs';
import home  from './components/home';
import mall from './components/mall';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import "@twa-dev/sdk";
//import checkout from "./components/checkout";

const Home = home;
const Mall = mall;
//const Checkout = checkout;
const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
 
  return (
    
    <StyledApp>
      <AppContainer>
     
        <Home/>
        <FlexBoxCol>
          <FlexBoxRow>
         <div style={{display:'flex',justifyContent:'space-evenly',top:'100%', bottom:'0%'}}>
            <Button style={{marginTop:'100%', marginRight:'30px'}}>
            <BsHeart/>   </Button>
            <Button style={{marginTop:'100%', marginRight:'30px'}}><BsFillWalletFill/>
            </Button>
              <Button style={{marginTop:'100%', marginRight:'30px'}}><BsCalendar2/>
            </Button> <Button style={{marginTop:'100%', marginRight:'30px'}}><BsStarFill/>
            </Button>
            </div>
          </FlexBoxRow>

        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
