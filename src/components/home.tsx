import { useEffect, useState } from 'react';
import 'react-icons/bs';
import '../index.css';
import axios from 'axios';
import styled from "styled-components";
import 'react-icons/fa';
import { Button } from "./styled/styled";
import './avatar';
import {  BsBag, BsCart3, BsFillWalletFill, BsHeart,  BsPlus} from 'react-icons/bs';
import { FaAppleAlt,  FaBreadSlice, FaGamepad, FaGift} from 'react-icons/fa';


const StyledApp = styled.div`
  background-color: whitesmoke;
  color: black;
  border-radius: 17px;
  position:absolute;

  @media (prefers-color-scheme: dark) {
    background-color: rgb(29, 40, 58);
    color: white;
  }
  min-height: 90vh;
  padding: 20px 20px 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 100%;
  height:fit-content;
  margin: 0 auto;
`;
function home(){
    
const styles = {width:'350px', maxWidth:'810px'};
 
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
    translator.style.transform = 'translateX(' + (-360) + 'px)';
   
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
                slideContents.style.transform = 'translateX(' + (currentIndex * -300) + 'px)';
                
                }
            }
            setInterval(changeSlide, 2000);
           }
        useEffect(()=>{
           slide();} ,[])

       
return(
<div >
    <StyledApp>
        <AppContainer>
    <div onLoad={onSubmitPersonalData} className="header" style={{display:'flex', justifyContent:'space-between', zoom:'110%'}}>
        <div>Hi, {fren}</div><div style={{marginRight:'17px'}}>GroTon</div><div style={{borderRadius:'100%', borderColor:'blue'}}><a href='#/profile' style={{color:'black', textDecoration:'none'}}><img style={{borderRadius:'100%', width:'20px', height:'20px'}} src='https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4307.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid'/></a></div>
        </div>

    


    <br></br><br></br>
    

    <div  id='slideContainer' style={{zIndex:'0',marginLeft:'19px' ,width:'300px', height:'150px', overflow:'hidden',  border:'1px solid black', borderRadius:'7px', justifySelf:'center'}}>
        <div id='slideContents' style={{height:'100%', width:'100%', display:'flex', transition:'1s ease'}}>
<img src='src/components/Morning Coffee & Journal4.jpg' height='300px' width='300px'/>
<img src='https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4350.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid' height='300px' width='320px'/>
<img src='src/components/Morning Coffee & Journal4.jpg' height='300px' width='300px'/>
        </div>
    
</div> <br></br>
<div id='navs' style={{marginLeft:'10%',fontFamily: 'Lexend' , zoom:'45%'}}><button style={{display:'inline', fontFamily: 'Lexend' ,textJustify:'inherit', margin:'7px', padding:'7px',background:'white', border:'2px solid black', borderRadius:'10px'}}  onClick={food}>Food stuff   <FaBreadSlice/> </button>
    <button style={{  fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'2px solid black', borderRadius:'5px', padding:'7px'}}  onClick={fruits}>Fruits  <FaAppleAlt/> </button>
    <button style={{ fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'2px solid black', borderRadius:'5px', padding:'7px'}} onClick={packaged}>Packagings  <FaGift /></button></div>
<section id='wrapper'  style={{display:'flex', overflow:'scroll', width:styles.width, color:'white', marginLeft:'1%' , height:'auto'}}>
  <div id="container" style={{transform:'1.5s ease',display:'flex'}} >
    <div className="section_food" style={{ display:'inline', justifyContent:'space-around', height:'auto', marginRight:'7px'}}>
    < section style={{display:'inline', zoom:'330%', height:'fit-content'}}>
<div onClick={saveProduct1}  className="items" style={{display:'flex',border:'1px solid rgb(188, 193, 205)',borderRadius:'5px',margin:'6px',  height: '20px', width: '90px'}}>
<img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/BeHnWh41tAHTg1zxTla1u36mz_qQqLaKI-W37IVUqE4/rs:fit:368:687/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDI3/LzBjYjdjOTJlLTBj/ZDEtNGY4Ni1hNTli/LWFkYWZmODcxNDY3/Yy5zdmc.png'/>
<BsBag style={{marginTop:'5%',marginLeft:'67%', color:'black', zoom:'70%'}}/>
</div>
<div  onClick={saveProduct2} id='prod_two'className="items" style={{display:'flex',borderRadius:'5px', margin:'6px', height: '20px', width:'90px', border: '1px solid rgb(245, 180, 194)'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src='   https://ouch-cdn2.icons8.com/9J-tqJWz53hWH0mo75-dhyg9cVrv3rNPoUfGLFVaw_k/rs:fit:368:143/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTQv/NDBlNGFkMjYtOTA2/ZS00MWM1LTllNjQt/OTk0Y2UzMWJkNjM1/LnN2Zw.png'/>
    <BsBag style={{marginTop:'5%',marginLeft:'67%', color:'black', zoom:'70%'}}/>
   </div>
<div  onClick={saveProduct3} id='prod_three' className="items" style={{display:'flex',borderRadius:'5px', margin:'6px', height: '20px', width:'90px', border: '1px solid rgb(206, 172, 102'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/ET5TgmBkf_yeuGltz9l7yp01wtX9aJMD-Nh8zz4UphY/rs:fit:368:320/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ4/L2RkNzk5ZTczLWJj/YTEtNDBlMC04NmNj/LTU4Nzk5NzVkYjdl/YS5wbmc.png'/>
    <BsBag style={{marginTop:'5%',marginLeft:'67%', color:'black',zoom:'70%'}}/>
   </div> 
<div onClick={saveProduct4} id='prod_four' className="items" style={{display:'flex',borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', border: ' 1px solid rgb(232, 232, 232)'}}>
  <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/5cIK3aleg5XZUrrfkNJOBKzFMYxtpOXeo181NvzVob8/rs:fit:368:442/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzY0/L2I1MDhhMDU0LTU3/ZWItNDJhYS1iY2Iz/LWVkYWU2OTRmOGU5/ZC5wbmc.png'/>
 <BsBag style={{marginTop:'5%',marginLeft:'70%', color:'black', zoom:'70%'}}/>
    </div>
<div onClick={saveProduct5} id='prod_five' className="items" style={{display:'flex',borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', border: '1px solid rgb(202, 232, 232)'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4E_6STmrlhph_nKBUI8Tv5Pr9TGiE74C4w6cB3Pzh3w/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAx/LzZiMGUyMGMzLTIy/MTEtNDg0OS05MDMy/LTUxNWZjMjljMTQ1/My5zdmc.png'/>
   <BsBag style={{marginTop:'5%',marginLeft:'70%', color:'black', zoom:'70%'}}/>
</div>
<div onClick={saveProduct6} id='prod_six' className="items" style={{display:'flex',borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4w-wbnJaspImr0-rImGetVrt_UGrTVPKkYj_GdWx6VU/rs:fit:368:484/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTUz/LzM4MmFlMGRhLTlj/OGYtNDcwNy1iZDAz/LWQyOTJlZDc3M2Yw/NC5wbmc.png'/>
   <BsBag style={{marginTop:'5%',marginLeft:'70%', color:'black', zoom:'70%'}}/>
   </div>

<div onClick={saveProduct7} id='prod_seven' className="items" style={{display:'flex',borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/BeHnWh41tAHTg1zxTla1u36mz_qQqLaKI-W37IVUqE4/rs:fit:368:687/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDI3/LzBjYjdjOTJlLTBj/ZDEtNGY4Ni1hNTli/LWFkYWZmODcxNDY3/Yy5zdmc.png'/>
   <BsBag style={{marginTop:'5%',marginLeft:'67%', color:'black', zoom:'70%'}}/>
   </div>
<div onClick={saveProduct8} id='prod_eight' className="items" style={{display:'flex',borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: '#e8e8e8'}}>
   <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src='   https://ouch-cdn2.icons8.com/9J-tqJWz53hWH0mo75-dhyg9cVrv3rNPoUfGLFVaw_k/rs:fit:368:143/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTQv/NDBlNGFkMjYtOTA2/ZS00MWM1LTllNjQt/OTk0Y2UzMWJkNjM1/LnN2Zw.png'/>
   <BsBag style={{marginTop:'7%',marginLeft:'67%', color:'black', zoom:'70%'}}/></div>
<div onClick={saveProduct9} id='prod_nine' className="items" style={{display:'flex',borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: '#e8e8e8'}}>
 <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/ET5TgmBkf_yeuGltz9l7yp01wtX9aJMD-Nh8zz4UphY/rs:fit:368:320/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ4/L2RkNzk5ZTczLWJj/YTEtNDBlMC04NmNj/LTU4Nzk5NzVkYjdl/YS5wbmc.png'/>
<BsBag style={{marginTop:'7%',marginLeft:'67%', color:'black', zoom:'70%'}}/></div>



<div className="items" style={{borderRadius:'5px',margin:'6px', height: '20px', width:'90px', backgroundColor: '#e8e8e8', border:'1px solid black'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4E_6STmrlhph_nKBUI8Tv5Pr9TGiE74C4w6cB3Pzh3w/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAx/LzZiMGUyMGMzLTIy/MTEtNDg0OS05MDMy/LTUxNWZjMjljMTQ1/My5zdmc.png'/>
   
</div>
<div className="items" style={{borderRadius:'6px', margin:'5px', height: '20px', width:'90px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4E_6STmrlhph_nKBUI8Tv5Pr9TGiE74C4w6cB3Pzh3w/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAx/LzZiMGUyMGMzLTIy/MTEtNDg0OS05MDMy/LTUxNWZjMjljMTQ1/My5zdmc.png'/>
    </div>

<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4w-wbnJaspImr0-rImGetVrt_UGrTVPKkYj_GdWx6VU/rs:fit:368:484/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTUz/LzM4MmFlMGRhLTlj/OGYtNDcwNy1iZDAz/LWQyOTJlZDc3M2Yw/NC5wbmc.png'/>
    
    </div>
    </section>
    </div>
    
  
    <div className="section_fruit" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'inline', zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'blue'}}></div></section>
<section style={{display:'inline', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
</section>
    
<section style={{display:'inline', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px', height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'blue'}}></div>
</section>

    </div>
    <div className="section_packaged" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'inline', zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'pink'}}></div></section>
<section style={{display:'inline', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
</section>
    
<section style={{display:'inline', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px', height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width:'90px', backgroundColor: 'pink'}}></div>
</section>

    </div>
</div>
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
  
