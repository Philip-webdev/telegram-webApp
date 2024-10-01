import "./App.css";
import home  from './home';
import mall from './mall';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import "@twa-dev/sdk";
import checkout from "./checkout";

const Home = home;
const Mall = mall;
const Checkout = checkout;
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
      <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/mall" Component={Mall}/>
        <Route path="/checkout" Component={Checkout}/>
   
        </Routes>
        </BrowserRouter>
        <FlexBoxCol>
          <FlexBoxRow>
         <div style={{display:'flex',justifyContent:'space-between',top:'100%', bottom:'0%'}}>
            <Button style={{marginTop:'100%', marginRight:'7px'}}>
              fav
            </Button>
            <Button style={{marginTop:'100%', marginRight:'7px'}}>wallet
            </Button>
            <Button style={{marginTop:'100%', marginRight:'7px'}}>delivery
            </Button> <Button style={{marginTop:'100%',  marginRight:'7px'}}>Mining
            </Button>
            </div>
          </FlexBoxRow>

        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
