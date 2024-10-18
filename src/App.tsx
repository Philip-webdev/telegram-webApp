import "./App.css";
import "./index.css";
import { BsCalendar2, BsCalendarPlus, BsFillWalletFill, BsHeart, BsMinecart, BsStack, BsStackOverflow, BsStarFill, BsStars, BsWallet, BsWallet2, BsWalletFill} from 'react-icons/bs';
import home  from './components/home';
import mall from './components/order';
import myProfile from './components/avatar';
import { HashRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import "@twa-dev/sdk";
import checkout from "./components/checkout";
import miner from "./components/miner";
import favourites from "./components/fav";
import order from "./components/order";

const Home = home;
const avatar = myProfile;
const Checkout = checkout;
const StyledApp = styled.div`
  background-color: whitesmoke;
  color: black;
  border-radius: 17px;

  @media (prefers-color-scheme: dark) {
    background-color: rgb(29, 40, 58);
    color: white;
  }
  min-height: 90vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
 
  return (
    <div >
   
  <StyledApp>
    <HashRouter>
    <Routes>
    <Route path="/" Component={home}/>
    <Route path="/profile" Component={myProfile}/>
    <Route path="/Checkout" Component={checkout}/>
    <Route path="/task" Component={miner}/>
    <Route path="/fav" Component={favourites}/>
    <Route path="/orders" Component={order}/>
    </Routes>
  </HashRouter>
  </StyledApp>
    </div>
  );
}

export default App;
