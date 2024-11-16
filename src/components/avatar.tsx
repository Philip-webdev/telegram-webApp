import axios from "axios";
import {  useState } from "react";
import 'react-icons/bs';
import { BsArrowLeftCircle, BsCart3, BsFillWalletFill, BsHeart } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "./styled/styled";

function myProfile(){
  const avatars = [
    'https://img.freepik.com/premium-vector/free-vector-african-american-people-casual-wear-outfit_1000823-297012.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid',
    'https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4350.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/hand-drawn-people-with-dreadlocks-illustration_23-2149752847.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid',
    'https://img.freepik.com/premium-vector/high-angle-view-happy-female-business-professional-office_1120554-56460.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid',
    'https://img.freepik.com/premium-vector/free-vector-african-american-people-casual-wear-outfit_1000823-297140.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/colorful-floral-shirt-avatar_1308-173336.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid'
  ];
    const src = {avaOne: 'https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4307.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid', avaSet:''};
    
  const [avatar, setAvatar] = useState(<img style={{borderRadius:'100%'}} src = {src.avaOne} height='100px' width='100px'/>);

  const onClickImage = ()=>{
    
    
  }
 


    const store = ()=>
    {
     

    

     if (('localStorage' in window) && window['localStorage'] !== null) 
    {
    
    //localStorage.setItem('avatarChoosed', {avatarChosen} );
   // localStorage.setItem('nameEntered', nameEntered);
    }
}
const StyledApp = styled.div`
  background-color: whitesmoke;
  color: black;
  position: fixed;
  

 
  @media (prefers-color-scheme: dark) {
    background-color:  rgb(29, 40, 58);
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

  const [showAvatars, setShowAvatars] = useState(false);



  const changeAvatar = () => {
    setShowAvatars(true); // Show avatars when called
  };
 const dblclicks = ()=>{
  setShowAvatars(false);
 }

 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault(); // Prevent the default form submission

      const profileData = {
          name: name,
          Phone: phone,
          Email: Email
      };

      try {
          const response = await fetch('https://twa-backend-g83o.onrender.com/profiler', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(profileData), // Convert the data to JSON
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const result = await response.json();
          console.log('Profile saved:', result); // Handle the response as needed
      } catch (error) {
          console.error('Error saving profile:', error);
      }
  };


return(
    
    <div style={{ width: '100%'}}>
       <StyledApp style={{ width: '100%'}}> <a href="#/home" style={{color:'black', textDecoration:'none'}}><BsArrowLeftCircle style={{color: 'rgb(46, 172, 219)',zoom:"150%"}}/></a><div style={{width:'50%', margin: 'auto'}}><p style={{textAlign:'center', borderColor:'rgb(46, 172, 219)', borderRadius:'100%', width:'fit-content'}}>{avatar}</p>
       </div>
       <div><h1>Your profile</h1>
      Your name <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Name"
              id = "name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          /><br></br>
          <input
              type="number"
              placeholder="Phone"
              id="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
          /><br></br>
           <input
              type="email"
              placeholder="Email"
              id = "Email"
              value={Email}
             onChange={(e) => setEmail(e.target.value)}
              required
          />
          <button type="submit">Submit</button>
      </form>
</div>
       <button onClick={changeAvatar} onDoubleClick={dblclicks}>Show Avatars</button><br></br>
      {showAvatars && (
        <div id="vector" style={{ background: 'none', display: 'flex', flexWrap: 'wrap' ,marginRight:'2px'}}>
          {avatars.map((src, index) => (
            <img  key={index} src={src} alt={`Avatar ${index + 1}`} style={{ zoom:'70%' ,borderRadius:'100%', margin: '7px', width: '100px', height: '100px' }} />
          ))}
        </div>
      )}

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
      
    </div>
);
}
export default myProfile;
