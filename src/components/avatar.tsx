import { useState } from "react";

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
return(
    <div>
        
    </div>
);
}
export default myProfile;