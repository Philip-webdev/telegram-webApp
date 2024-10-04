import { useState } from "react";
import styled from "styled-components";

function myProfile(){

    const src = {avaOne: 'https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4307.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid', avaSet:''};
    const name = {nameEntry:''}
  const [avatar, setAvatar] = useState(<img style={{borderRadius:'100%'}} src = {src.avaOne} height='100px' width='100px'/>);

  const [fren, setFren] = useState('fren');
    const store = ()=>
    {
     
     const avatarChosen = setAvatar(<img src = {src.avaSet}/>);
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

const changeAvatar = ()=> {
  const AvatarPanel = document.createElement('div');
AvatarPanel.style.background ="red";
  const images1 = document.createElement('img');
  images1.src = 'https://img.freepik.com/premium-vector/free-vector-african-american-people-casual-wear-outfit_1000823-297012.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid';
  const images2 = document.createElement('img');
  images2.src = 'https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4350.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid';

  const images3 = document.createElement('img');
  images3.src = 'https://img.freepik.com/free-vector/hand-drawn-people-with-dreadlocks-illustration_23-2149752847.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid';
  const images4 = document.createElement('img');
  images4.src = '';
  const images5 = document.createElement('img');
  images5.src = '';
  const images6 = document.createElement('img');
  images6.src = 'https://img.freepik.com/premium-vector/high-angle-view-happy-female-business-professional-office_1120554-56460.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid';
  const images7 = document.createElement('img');
  images7.src = 'https://img.freepik.com/premium-vector/free-vector-african-american-people-casual-wear-outfit_1000823-297140.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid';
  const images8 = document.createElement('img');
  images8.src = 'https://img.freepik.com/free-vector/colorful-floral-shirt-avatar_1308-173336.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid';
    AvatarPanel.appendChild(images1);
    AvatarPanel.appendChild(images2);
    AvatarPanel.appendChild(images3);
    //AvatarPanel.appendChild(images4);
   // AvatarPanel.appendChild(images5);
    AvatarPanel.appendChild(images6);
    AvatarPanel.appendChild(images7);
    AvatarPanel.appendChild(images8);
}

return(
    
    <div style={{ width: '100%'}}>
       <StyledApp style={{ width: '100%'}}> <div style={{width:'50%', margin: 'auto'}}><p style={{textAlign:'center', border:'2px solid blue', borderRadius:'100%', width:'fit-content'}}>{avatar}</p>
       </div>
       <div><h1>Your profile</h1>
       <p>your name <input defaultValue='' type="text" placeholder="fren" style={{borderBottomColor:' white',border:'none', background:'none', borderRadius:'5px'}}/></p>
       </div>

       <button onClick={changeAvatar}>change Avatar</button>
       </StyledApp>
      
    </div>
);
}
export default myProfile;