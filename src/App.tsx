import "./App.css";
import "./index.css";
 
import home  from './components/home';
 
import myProfile from './components/avatar';
import { HashRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
 
import "@twa-dev/sdk";
import checkout from "./components/checkout";
import miner from "./components/miner";
import favourites from "./components/fav";
import order from "./components/order";
import Frontier from "./components/showcaser";

 
const StyledApp = styled.div`
  background-color: whitesmoke;
  color: black;
  border-radius: 17px;
    position: fixed;
  @media (prefers-color-scheme: dark) {
    background-color: rgb(29, 40, 58);
    color: white;
  }
  min-height: 90vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0;
`;

function App() {
 
  return (
    <div >
   
  
    <HashRouter>
    <Routes>
    <Route path="/home" Component={home}/>
    <Route path="/profile" Component={myProfile}/>
    <Route path="/Checkout" Component={checkout}/>
    <Route path="/task" Component={miner}/>
    <Route path="/fav" Component={favourites}/>
    <Route path="/orders" Component={order}/>
    </Routes>
  </HashRouter>
  <StyledApp style={{backgroundImage: 'url("https://i.imgur.com/EHAMVNs.jpeg?1")', backgroundSize: 'cover', backgroundPosition: 'center'}}>

    <Frontier/>
 
  </StyledApp>
    </div>
  );
}

export default App;
