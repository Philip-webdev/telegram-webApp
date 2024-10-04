import { useState } from "react";
import styled from "styled-components";

function myProfile(){

    const src = {avaOne: '', avaSet:''};
    const name = {nameEntry:''}
  const [avatar, setAvatar] = useState(src.avaOne);

  const [fren, setFren] = useState('fren');
    const store = ()=>
    {
     
     const avatarChosen = setAvatar(src.avaSet);
     const nameEntered = setFren(name.nameEntry);

     if (('localStorage' in window) && window['localStorage'] !== null) 
    {
    
    //localStorage.setItem('avatarChoosed', {avatarChosen} );
   // localStorage.setItem('nameEntered', nameEntered);
    }
}
const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
  position: fixed;
 
  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;


return(
    
    <div style={{ width: '100%'}}>
       <StyledApp style={{ width: '100%'}}> <p>hi</p></StyledApp>
      
    </div>
);
}
export default myProfile;