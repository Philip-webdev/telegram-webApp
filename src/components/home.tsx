
import 'react-icons/bs';
import '../index.css';
import 'react-icons/fa';
import { useState } from 'react';
import { Button } from "./styled/styled";
import './avatar';
import { BsCalendar2, BsCalendarPlus, BsFillWalletFill, BsHeart, BsMinecart, BsStack, BsStackOverflow, BsStarFill, BsStars, BsWallet, BsWallet2, BsWalletFill} from 'react-icons/bs';
import { FaAppleAlt, FaBacon, FaBreadSlice, FaCarrot, FaGift } from 'react-icons/fa';

function home(){
const styles = {width:'330px', maxWidth:'810px'};
 
   const packaged = () => {
    const translator  = document.getElementById('container');
    if(translator != null){
    translator.style.transform = 'translateX(' + (-625) + 'px)';
   
    }
    else{
        console.log('not working');
    }
   }
   const fruits = () => {
    const translator  = document.getElementById('container');
    if(translator != null){
    translator.style.transform = 'translateX(' + (-310) + 'px)';
   
    }
    else{
        console.log('not working');
    }
   }
const food = ()=> {
    const translator  = document.getElementById('container');
    if(translator != null){
        translator.style.transform = 'translateX(' + (1) + 'px)';
       
        }
    }
    const frens = 'name';
        const name = document.getElementById('name')?.innerText
        const [fren, setFren] = useState(frens);

    const onSetname = ()=>{
        if(name == " "){
        const nameEntered = setFren(name);
        }
       }
return(
<div>
    <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
        <div>Hi, {fren}</div><div>GroTon</div><div style={{borderRadius:'100%'}}><img style={{borderRadius:'100%', width:'20px', height:'20px'}} src='https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4307.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid'/></div>
        </div>

    


    <br></br><br></br>
    <div  style={{ fontFamily: 'Lexend' , zoom:'70%'}}><button style={{display:'inline', fontFamily: 'Lexend' ,textJustify:'inherit', margin:'10px', padding:'7px',background:'white', border:'none', borderRadius:'7px'}}  onClick={food}>Food stuff   <FaBreadSlice/> </button>
    <button style={{  fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'none', borderRadius:'5px', padding:'7px'}} onClick={fruits}>Fruits  <FaAppleAlt/> </button>
    <button style={{ fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'none', borderRadius:'5px', padding:'7px'}} onClick={packaged}>Packagings  <FaGift /></button></div>

<section id='wrapper'  style={{display:'flex', overflow:'hidden', width:styles.width, marginLeft:'1%' , height:'fit-content'}}>
  <div id="container" style={{transform:'1.5s ease',display:'flex'}} >
    <div className="section_food" style={{ display:'inline', justifyContent:'space-around', height:'auto', marginRight:'10px'}}>
    < section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'white'}}><img height='10px' width='10px' src='https://img.freepik.com/premium-photo/spaghetti-pasta-white-plate-blue-background_90380-516.jpg'/></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div></section>
    

<section style={{display:'flex',zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div></section>
< section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div></section>
    
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'white'}}></div></section>
    </div>
    
  
    <div className="section_fruit" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'flex', zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div></section>
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
</section>
    
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
</section>

    </div>
    <div className="section_packaged" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'flex', zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div></section>
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
</section>
    
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'5px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
</section>

    </div>
</div>
</section>
<div style={{right:'0.1%', bottom:'0%', display:'flex',justifyContent:'space-evenly' ,height:'fit-content',background:'white', width:'100%', paddingBottom:'10px', paddingRight:'10px',position:'fixed'}}>
            <Button  style={{  fontFamily: 'Lexend' , marginLeft:'30px',bottom:'0%', marginRight:'33px', background:'none', color:"black"}}>
            <BsHeart/>  <p style={{zoom:'80%'}}>favs</p> </Button>
            <Button  style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'32px', background:'none', color:"black"}}><BsFillWalletFill/>
            <p style={{zoom:'80%'}}><a href='/profile' style={{color:'black', textDecoration:'none'}}>wallet</a></p></Button>
              <Button style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'32px', background:'none', color:"black"}}><BsCalendar2/>
              <p style={{zoom:'80%'}}>orders</p></Button> <Button  style={{ fontFamily: 'Lexend' ,bottom:'0%', background:'none', color:"black"}}><BsStarFill/>
              <p style={{zoom:'80%'}}>Tasks</p> </Button>
            </div>
</div>

);
}


export default home;    
