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
      <AppContainer >
        <Home/><div style={{right:'0.1%',display:'flex',justifyContent:'space-evenly' ,height:'fit-content',background:'white', width:'100%', paddingRight:'10px', top:'100%',position:'absolute'}}>
            <Button className="but" style={{left:'2%',bottom:'0%', marginRight:'35px', background:'none', color:"rgb(46, 173, 200)"}}>
            <BsHeart/>   </Button>
            <Button className="but" style={{bottom:'0%', marginRight:'35px', background:'none', color:"rgb(46, 173, 200)"}}><BsFillWalletFill/>
            </Button>
              <Button className="but" style={{bottom:'0%', marginRight:'35px', background:'none', color:"rgb(46, 173, 200)"}}><BsCalendar2/>
            </Button> <Button className="but" style={{bottom:'0%', background:'none', color:"rgb(46, 173, 200)"}}><BsStarFill/>
            </Button>
            </div>
    
  
      </AppContainer>
    </StyledApp>
  );
}

export default App;
