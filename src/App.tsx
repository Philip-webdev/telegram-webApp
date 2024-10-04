import "./App.css";
import "./index.css";
import { BsCalendar2, BsCalendarPlus, BsFillWalletFill, BsHeart, BsMinecart, BsStack, BsStackOverflow, BsStarFill, BsStars, BsWallet, BsWallet2, BsWalletFill} from 'react-icons/bs';
import home  from './components/home';
import mall from './components/mall';
import myProfile from './components/avatar';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import "@twa-dev/sdk";
import checkout from "./components/checkout";

const Home = home;
const avatar = myProfile;
const Checkout = checkout;
const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
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
    <div > <BrowserRouter>
    <Routes>
    <Route path="/profile" Component={myProfile}/>
    </Routes>
  </BrowserRouter>
    <StyledApp> 
      <AppContainer >
        <Home/>
      </AppContainer>
    </StyledApp>
    </div>
  );
}

export default App;
