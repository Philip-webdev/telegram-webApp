
import 'react-icons/bs';
import '../index.css';
import 'react-icons/fa';
import { Button } from "./styled/styled";
import { BsGift, BsPersonCircle } from 'react-icons/bs';
import { FaAppleAlt, FaBacon, FaBreadSlice, FaCarrot, FaGift } from 'react-icons/fa';

function home(){
const styles = {width:'330px'};
 
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
   

return(
<div>
    <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
        <div>Hi, fren</div><div>GroTon</div><div style={{borderRadius:'100%', background:'white', width:'auto', height:'auto', textAlign:'center'}}>
         <BsPersonCircle  style={{color:"rgb(46, 173, 200)"}}/> 
        </div>
    </div>
    <br></br><br></br>
    <div className="shelves" style={{zoom:'60%'}}><button style={{display:'inline' ,textJustify:'inherit', margin:'10px', padding:'7px',background:'white', border:'none', borderRadius:'7px'}}  onClick={food}>Food stuff   <FaBreadSlice  style={{color:"rgb(46, 173, 200)"}}/> </button>
    <button style={{ margin:'10px', background:'white', border:'none', borderRadius:'5px', padding:'7px'}} onClick={fruits}>Fruits  <FaAppleAlt style={{color:"rgb(46, 173, 200)"}}/> </button>
    <button style={{ margin:'10px', background:'white', border:'none', borderRadius:'5px', padding:'7px'}} onClick={packaged}>Packagings  <FaGift  style={{color:"rgb(46, 173, 200)"}}/></button></div>

<div  style={{display:'flex', overflow:'hidden', width:styles.width, margin:'0', justifySelf:'center' , height:'inherit'}}>
  <div id="container" style={{transform:'1.5s ease',display:'flex'}} >
    <div className="section_food" style={{ display:'inline', justifyContent:'space-around', height:'fit-content', marginRight:'10px'}}>
    < section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'5px',  height: '20px', width: '20px', backgroundColor: 'white'}}></div>
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
</div>
</div>
);
}


export default home;    
