import { useEffect, useState } from 'react';
import 'react-icons/bs';
import '../index.css';
import axios from 'axios';
import styled from "styled-components";
import 'react-icons/fa';
import { Button } from "./styled/styled";
import './avatar';
import {  BsBag, BsCart3, BsFillWalletFill, BsHeart,  BsPlus} from 'react-icons/bs';
import { FaAppleAlt,  FaBreadSlice, FaFire, FaGamepad, FaGetPocket, FaGift} from 'react-icons/fa';


const StyledApp = styled.div`
  background-color: whitesmoke;
  color: black;
  border-radius: 17px;
  position:absolute;
  width: fit-content;

  @media (prefers-color-scheme: dark) {
    background-color: rgb(29, 40, 58);
    color: white;
  }
   
  min-height: 90vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  width: clientWidth;
  height:fit-content;
  margin: auto ;
`;
function home(){
    
const styles = {width:innerWidth, maxWidth:'810px'};
 
// const commodity = {name:document.getElementById('')?.innerText, price:document.getElementById('')?.innerText}

   const packaged = () => {
    const translator  = document.getElementById('container');
    if(translator != null){
    translator.style.transform = 'translateX(' + (-715) + 'px)';
   
    }
    else{
        console.log('not working');
    }
   }
   const fruits = () => {
    const translator  = document.getElementById('container');
    if(translator != null){
    translator.style.transform = 'translateX(' + (-460) + 'px)';
   
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
   
    const [fren, setFren] = useState('fren');
    const onSubmitPersonalData = async () => {
      try {
        const response = await axios.get('https://philip-webdev.github.io/telegram-webApp/profiler', {
          headers: { 'Content-Type': 'application/json'}});
        
        setFren(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle error appropriately
      }
    };
useEffect(()=>{
 onSubmitPersonalData();
}, [])
      // i need to set   a listner fr ckicks on each products. 
      // it actually does the action of storing on local storage. 
      //I should be getiing items at the revelant component.

     
                const product1 =   document.getElementById('one')?.innerText;
                const product2=   document.getElementById('prod_two')?.innerText;
                const product3 =   document.getElementById('prod_three')?.innerText;
                const product4 =   document.getElementById('prod_four')?.innerText;
                const product5 =   document.getElementById('prod_five')?.innerText;
                const product6 =   document.getElementById('prod_six')?.innerText;
                const product7 =   document.getElementById('prod_seven')?.innerText;
                const product8 =   document.getElementById('prod_eight')?.innerText;
                const product9 =   document.getElementById('prod_nine')?.innerText;


 const product_data_1 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product1})
};

const product_data_2 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product2})
};

const product_data_3 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product3})
};
const product_data_4 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product4})
};

const product_data_5 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product5})
};

const product_data_6 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product6})
};

const product_data_7 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product7})
};

const product_data_8 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product8})
};

const product_data_9 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product9})
};
const saveProduct1 = ()=>{
  
            if(product1  !=null && product1 != undefined){
                axios.post('https://twa-backend-g83o.onrender.com/product', {product_data_1});
            
        }
   
    }

  
    const saveProduct2 = ()=>{
       
            if(product2  !=null && product2 != undefined){
                axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly', {product_data_2});
        
    }
}

const saveProduct3 = ()=>{
  
        if(product3  !=null && product3 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly', {product_data_3});
        
    }
}
const saveProduct4 = ()=>{
   
        if(product4 !=null && product4 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly',{ product_data_4});
        
    }
}
const saveProduct5 = ()=>{
   
        if(product5  !=null && product5 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly', {product_data_5});
        

    }
}
const saveProduct6 = ()=>{
  
        if(product6  !=null && product6 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly',{ product_data_6});
        
    }
}

const saveProduct7 = ()=>{
   
        if(product7  !=null && product7 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly', {product_data_7});
        }
    
}
const saveProduct8 = ()=>{
   
        if(product8  !=null && product8 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly',{ product_data_8});
        }

    
}
const saveProduct9 = ()=>{
    
        if(product9  !=null && product9 != undefined){
            axios.post('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly', {product_data_9});
                }
            
        }

        
      
           const slide = ()=>{
            const slideContents = document.getElementById('slideContents');
            const slideContainer = document.getElementById('slideContainer');
            var currentIndex = 0;
            function changeSlide(){
               
                const slidex = ['1', '2','3', '4'];
                currentIndex = (currentIndex + 1) % slidex.length;
                if (slideContents != null){
                slideContents.style.transform = 'translateX(' + (currentIndex * -innerWidth) + 'px)';
                
                }
            }
            setInterval(changeSlide, 2000);
           }
        useEffect(()=>{
           slide();} ,[])

       
return(
<div style={{width:'100%'}}>
    <StyledApp>
        <AppContainer>
    <div onLoad={onSubmitPersonalData} className="header" style={{display:'flex', justifyContent:'space-between', zoom:'100%'}}>
        <div>Hi, {fren}</div><div style={{textAlign:'center'}}>GroTon</div><div style={{borderRadius:'100%', borderColor:'blue'}}><a href='#/profile' style={{color:'black', textDecoration:'none'}}><img style={{borderRadius:'100%', width:'20px', height:'20px'}} src='https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4307.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid'/></a></div>
        </div>

    


    <br></br><br></br>
    

    <div  id='slideContainer' style={{zIndex:'0',marginLeft:'19px' ,width:innerWidth, height:'150px', overflow:'hidden',  border:'1px solid black', borderRadius:'7px', justifySelf:'center'}}>
        <div id='slideContents' style={{height:'100%', width:'100%', display:'flex', transition:'1s ease'}}>
<img src='src/components/Morning Coffee & Journal4.jpg' height='300px' width={styles.width}/>
<img src='https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4350.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid' height='300px' width={styles.width}/>
<img src='src/components/Morning Coffee & Journal4.jpg' height='300px' width={styles.width}/>
        </div>
    
</div> <br></br>
<div id='navs' style={{marginLeft:'7%',fontFamily: 'Lexend' , zoom:'60%'}}><button style={{display:'inline', fontFamily: 'Lexend' ,textJustify:'inherit', margin:'7px', padding:'7px',background:'white', border:'2px solid black', borderRadius:'10px'}}  onClick={food}>Food stuff   <FaBreadSlice/> </button>
    <button style={{  fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'2px solid black', borderRadius:'5px', padding:'7px'}}  onClick={fruits}>Instant Hot  <FaFire/> </button>
    <button style={{ fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'2px solid black', borderRadius:'5px', padding:'7px'}} onClick={packaged}>Packagings  <FaGift /></button></div>
  <p style={{marginLeft: '10%'}}>Raw</p>   
<section id='wrapper'  style={{display:'flex', overflow:'scroll', width:styles.width, color:'white', marginLeft:'1%' , height:'auto'}}>
  <div id="container" style={{transform:'1.5s ease',display:'flex'}} >
    
    
    <div className="section_food" style={{ display:'inline', justifyContent:'space-around', height:'auto', marginRight:'7px'}}>
    < section style={{display:'flex', zoom:'330%', height:'fit-content'}}>
<div onClick={saveProduct1}  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}>
  <div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>

</div>
<div  onClick={saveProduct2} id='prod_two'className="items" style={{height: '50px',display:'flex',borderRadius:'5px', margin:'6px',  width:'30px', border: '1px solid rgb(245, 180, 194)'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
   
   </div>
<div  onClick={saveProduct3} id='prod_three' className="items" style={{height: '50px',display:'flex',borderRadius:'5px', margin:'6px',  width:'30px', border: '1px solid rgb(206, 172, 102'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
   </div> 

<div onClick={saveProduct4} id='prod_four' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: ' 1px solid rgb(232, 232, 232)'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
    </div>
<div onClick={saveProduct5} id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
< FaGetPocket/></div>
</div>
<div onClick={saveProduct6} id='prod_six' className="items" style={{height: '50px',display:'flex',borderRadius:'5px', margin:'6px',  width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
   </div>

<div onClick={saveProduct7} id='prod_seven' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
   </div>
<div onClick={saveProduct8} id='prod_eight' className="items" style={{height: '50px',display:'flex',borderRadius:'5px', margin:'6px',  width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
   </div>
<div onClick={saveProduct9} id='prod_nine' className="items" style={{height: '50px', display:'flex',borderRadius:'5px', margin:'6px',  width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
</div>



<div className="items" style={{borderRadius:'5px',margin:'5px',  width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
</div>
<div className="items" style={{borderRadius:'5px', margin:'5px',  width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
    </div>

<div className="items" style={{borderRadius:'5px', margin:'5px',  width:'30px', backgroundColor: '#e8e8e8'}}>
<div style={{zoom:'40%', display:'flex', justifyContent:'space-between', gap:'28px', color: 'grey', marginTop: '140%'}}> $100
 < FaGetPocket/></div>
    </div>
    </section>
    </div></div>
    </section >
   <p style={{marginLeft: '10%'}}> Fruits </p>
    <section id='wrapper2'  style={{display:'flex', overflow:'scroll', width:styles.width, color:'white', marginLeft:'%' , height:'fit-content'}}>
    <div id="container2" style={{transform:'1.5s ease',display:'flex'}} >
    <div className="section_fruit" style={{display:'inline', justifyContent:'space-around', height:'auto', margin:'0px'}}>
    <section style={{display:'flex', zoom:'330%'}}>
        <div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
<div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
 <div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>

<div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
<div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
<div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>


<div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
 <div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
 <div  className="items" style={{height: '50px',display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px', width: '30px'}}></div>
</section>
    </div>    </div>
    </section>
    <p style={{marginLeft: '10%'}}> packaged </p>
    <section id='wrapper3'  style={{display:'flex', overflow:'scroll', width:styles.width, color:'white', marginLeft:'%' , height:'auto'}}>
    <div id="container3" style={{transform:'1.5s ease',display:'flex'}}>
    <div className="section_packaged" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'flex', zoom:'330%'}}><div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
 
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div> 
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
<div   id='prod_five' className="items" style={{height: '50px',display:'flex',borderRadius:'5px',margin:'6px',   width:'30px', border: '1px solid rgb(202, 232, 232)'}}></div>
</section>

    </div></div>

</section>
<div style={{right:'0.1%', bottom:'0%', display:'flex',justifyContent:'space-evenly' ,height:'fit-content',background:'#e8e8e8', width:'100%', paddingBottom:'10px', paddingRight:'10px',position:'fixed', borderRadius:'7px'}}>
            <a href='#/fav' style={{color:'black', textDecoration:'none'}}> 
            <Button  style={{  fontFamily: 'Lexend' ,  marginLeft:'20px',bottom:'0%', marginRight:'27px', background:'none', color:"black"}}>
            <BsHeart/>  <p style={{zoom:'80%'}}>favs</p> </Button></a>
            <a href='#/Checkout' style={{color:'black', textDecoration:'none'}}> <Button  style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'30px', background:'none', color:"black"}}><BsFillWalletFill/>
            <p style={{zoom:'80%'}}>wallet</p></Button></a>
            <a href='#/orders' style={{color:'black', textDecoration:'none'}}>  <Button style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'27px', background:'none', color:"black"}}><BsCart3/>
              <p style={{zoom:'80%'}}>orders</p></Button></a> <a href='#/task' style={{color:'black', textDecoration:'none'}}><Button  style={{ fontFamily: 'Lexend' ,bottom:'0%', background:'none', color:"black"}}><FaGamepad/>
              <p style={{zoom:'80%'}}>Games</p> </Button></a>
            </div></AppContainer>
            </StyledApp>     
</div>

);

}


export default home; 
  
