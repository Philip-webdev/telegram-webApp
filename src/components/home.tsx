
import 'react-icons/bs';
import '../index.css';
import 'react-icons/fa';
import { Button } from "./styled/styled";
import './avatar';
import {  BsCart3, BsFillWalletFill, BsHeart,  BsPlus} from 'react-icons/bs';
import { FaAppleAlt,  FaBreadSlice, FaGamepad, FaGift} from 'react-icons/fa';

function home(){
const styles = {width:'330px', maxWidth:'810px'};
 
// const commodity = {name:document.getElementById('')?.innerText, price:document.getElementById('')?.innerText}

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
    //const frens = 'name';

      //  const name = document.getElementById('name')?.innerText
      //  const [fren, setFren] = useState(frens);

      // i need to set   a listner fr ckicks on each products. 
      // it actually does the action of storing on local storage. 
      //I should be getiing items at the revelant component.

     
                const product1 =   document.getElementById('one')?.innerText;
                const product2=   document.getElementById('')?.innerText;
                const product3 =   document.getElementById('')?.innerText;
                const product4 =   document.getElementById('')?.innerText;
                const product5 =   document.getElementById('')?.innerText;
                const product6 =   document.getElementById('')?.innerText;
                const product7 =   document.getElementById('')?.innerText;
                const product8 =   document.getElementById('')?.innerText;
                const product9 =   document.getElementById('')?.innerText;
//const productsArray = {product1: document.getElementById('')?.innerText, product2, product3, product4, product5, product8, product9};
const saveProduct1 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
            if(product1  !=null && product1 != undefined){
                    localStorage.setItem('product 1', product1);
            }
        }
    }
    const saveProduct2 = ()=>{
        if (('localStorage' in window) && window['localStorage'] !== null) 
            {
            if(product2  !=null && product2 != undefined){
                    localStorage.setItem('product 2', product2)
        }
    }
}

const saveProduct3 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product3  !=null && product3 != undefined){
                    localStorage.setItem('product 3', product3)
        }
    }
}
const saveProduct4 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product4 !=null && product4 != undefined){
                    localStorage.setItem('product 4', product4)
        }
    }
}
const saveProduct5 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product5  !=null && product5 != undefined){
                    localStorage.setItem('product 5', product5)
        }

    }
}
const saveProduct6 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product6  !=null && product6 != undefined){
                    localStorage.setItem('product 6', product6)
        }
    }
}

const saveProduct7 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product7  !=null && product7 != undefined){
                    localStorage.setItem('product 7', product7)
        }
    }
}
const saveProduct8 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product8  !=null && product8 != undefined){
                    localStorage.setItem('product 8', product8)
        }

    }
}
const saveProduct9 = ()=>{
    if (('localStorage' in window) && window['localStorage'] !== null) 
        {
        if(product9  !=null && product9 != undefined){
                    localStorage.setItem('product 9', product9)
                }
            }
        }
           
           
   
       
return(
<div>
    <div className="header" style={{display:'flex', justifyContent:'space-between', zoom:'110%'}}>
        <div>Hi, fren</div><div style={{marginRight:'17px'}}>GroTon</div><div style={{borderRadius:'100%', borderColor:'blue'}}><a href='#/profile' style={{color:'black', textDecoration:'none'}}><img style={{borderRadius:'100%', width:'20px', height:'20px'}} src='https://img.freepik.com/premium-vector/happy-black-people-vector-illustration_1213699-4307.jpg?ga=GA1.1.478922520.1717005114&semt=ais_hybrid'/></a></div>
        </div>

    


    <br></br><br></br>
    <div id='navs' style={{ fontFamily: 'Lexend' , zoom:'50%'}}><button style={{display:'inline', fontFamily: 'Lexend' ,textJustify:'inherit', margin:'10px', padding:'7px',background:'white', border:'2px solid black', borderRadius:'7px'}}  onClick={food}>Food stuff   <FaBreadSlice/> </button>
    <button style={{  fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'2px solid black', borderRadius:'5px', padding:'7px'}} onClick={fruits}>Fruits  <FaAppleAlt/> </button>
    <button style={{ fontFamily: 'Lexend' ,margin:'10px', background:'white', border:'2px solid black', borderRadius:'5px', padding:'7px'}} onClick={packaged}>Packagings  <FaGift /></button></div>

<section id='wrapper'  style={{display:'flex', overflow:'hidden', width:styles.width, color:'white', marginLeft:'1%' , height:'500px'}}>
  <div id="container" style={{transform:'1.5s ease',display:'flex'}} >
    <div className="section_food" style={{ display:'inline', justifyContent:'space-around', height:'auto', marginRight:'10px'}}>
    < section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/BeHnWh41tAHTg1zxTla1u36mz_qQqLaKI-W37IVUqE4/rs:fit:368:687/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDI3/LzBjYjdjOTJlLTBj/ZDEtNGY4Ni1hNTli/LWFkYWZmODcxNDY3/Yy5zdmc.png'/> 
    <caption onClick={saveProduct1} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
<div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src='   https://ouch-cdn2.icons8.com/9J-tqJWz53hWH0mo75-dhyg9cVrv3rNPoUfGLFVaw_k/rs:fit:368:143/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTQv/NDBlNGFkMjYtOTA2/ZS00MWM1LTllNjQt/OTk0Y2UzMWJkNjM1/LnN2Zw.png'/>
    <caption onClick={saveProduct2} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
    <div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/ET5TgmBkf_yeuGltz9l7yp01wtX9aJMD-Nh8zz4UphY/rs:fit:368:320/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ4/L2RkNzk5ZTczLWJj/YTEtNDBlMC04NmNj/LTU4Nzk5NzVkYjdl/YS5wbmc.png'/>
    <caption onClick={saveProduct3} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
    <div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div></section>
    

<section style={{display:'flex',zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/5cIK3aleg5XZUrrfkNJOBKzFMYxtpOXeo181NvzVob8/rs:fit:368:442/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzY0/L2I1MDhhMDU0LTU3/ZWItNDJhYS1iY2Iz/LWVkYWU2OTRmOGU5/ZC5wbmc.png'/>
    <caption onClick={saveProduct4} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
    <div style={{display:'flex', zoom:'50%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}><img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4E_6STmrlhph_nKBUI8Tv5Pr9TGiE74C4w6cB3Pzh3w/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAx/LzZiMGUyMGMzLTIy/MTEtNDg0OS05MDMy/LTUxNWZjMjljMTQ1/My5zdmc.png'/>
<caption onClick={saveProduct5} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
<div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4w-wbnJaspImr0-rImGetVrt_UGrTVPKkYj_GdWx6VU/rs:fit:368:484/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTUz/LzM4MmFlMGRhLTlj/OGYtNDcwNy1iZDAz/LWQyOTJlZDc3M2Yw/NC5wbmc.png'/>
    <caption onClick={saveProduct6} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
    <div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
</section>
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/BeHnWh41tAHTg1zxTla1u36mz_qQqLaKI-W37IVUqE4/rs:fit:368:687/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDI3/LzBjYjdjOTJlLTBj/ZDEtNGY4Ni1hNTli/LWFkYWZmODcxNDY3/Yy5zdmc.png'/>
    <caption onClick={saveProduct7} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
 <div style={{display:'flex', zoom:'50%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src='   https://ouch-cdn2.icons8.com/9J-tqJWz53hWH0mo75-dhyg9cVrv3rNPoUfGLFVaw_k/rs:fit:368:143/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTQv/NDBlNGFkMjYtOTA2/ZS00MWM1LTllNjQt/OTk0Y2UzMWJkNjM1/LnN2Zw.png'/>
    <caption onClick={saveProduct8} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
<div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/ET5TgmBkf_yeuGltz9l7yp01wtX9aJMD-Nh8zz4UphY/rs:fit:368:320/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ4/L2RkNzk5ZTczLWJj/YTEtNDBlMC04NmNj/LTU4Nzk5NzVkYjdl/YS5wbmc.png'/>
    <caption onClick={saveProduct9} id='one' style={{zoom:'45%', color:'black', marginLeft:'4px'}}>pear</caption>
<div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>
</section>

<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4E_6STmrlhph_nKBUI8Tv5Pr9TGiE74C4w6cB3Pzh3w/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAx/LzZiMGUyMGMzLTIy/MTEtNDg0OS05MDMy/LTUxNWZjMjljMTQ1/My5zdmc.png'/>
    <div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}>
        <BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/>
        </div>
</div>
<div className="items" style={{borderRadius:'6px', margin:'5px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4E_6STmrlhph_nKBUI8Tv5Pr9TGiE74C4w6cB3Pzh3w/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAx/LzZiMGUyMGMzLTIy/MTEtNDg0OS05MDMy/LTUxNWZjMjljMTQ1/My5zdmc.png'/>
    <div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}>
        <BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/></div></div>

<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: '#e8e8e8'}}>
    <img style={{margin:'5.5px', zoom:'70%'}} height='17px' width='17px' src=' https://ouch-cdn2.icons8.com/4w-wbnJaspImr0-rImGetVrt_UGrTVPKkYj_GdWx6VU/rs:fit:368:484/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTUz/LzM4MmFlMGRhLTlj/OGYtNDcwNy1iZDAz/LWQyOTJlZDc3M2Yw/NC5wbmc.png'/>
    <div style={{display:'flex',zoom:'45%', justifyContent:'space-evenly'}}><BsHeart style={{zoom:'50%', color:'black', margin:'1px'}}/> <BsPlus style={{zoom:'50%', margin:'1px',color:'black'}}/>
    </div>
    </div>
    </section>
    </div>
    
  
    <div className="section_fruit" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'flex', zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div></section>
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
</section>
    
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'blue'}}></div>
</section>

    </div>
    <div className="section_packaged" style={{display:'inline', justifyContent:'space-around', height:'300px', margin:'10px'}}>
    <section style={{display:'flex', zoom:'330%'}}><div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div></section>
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px',  height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
</section>
    
<section style={{display:'flex', zoom:'330%'}}>
<div className="items" style={{borderRadius:'5px',margin:'6px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
<div className="items" style={{borderRadius:'5px', margin:'6px', height: '20px', width: '20px', backgroundColor: 'pink'}}></div>
</section>

    </div>
</div>
</section>
<div style={{right:'0.1%', bottom:'0%', display:'flex',justifyContent:'space-evenly' ,height:'fit-content',background:'#e8e8e8', width:'100%', paddingBottom:'10px', paddingRight:'10px',position:'fixed', borderRadius:'7px'}}>
            <Button  style={{  fontFamily: 'Lexend' ,  marginLeft:'20px',bottom:'0%', marginRight:'27px', background:'none', color:"black"}}>
            <BsHeart/>  <p style={{zoom:'80%'}}>favs</p> </Button>
            <a href='#/Checkout' style={{color:'black', textDecoration:'none'}}> <Button  style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'30px', background:'none', color:"black"}}><BsFillWalletFill/>
            <p style={{zoom:'80%'}}>wallet</p></Button></a>
              <Button style={{  fontFamily: 'Lexend' ,bottom:'0%', marginRight:'27px', background:'none', color:"black"}}><BsCart3/>
              <p style={{zoom:'80%'}}>orders</p></Button> <a href='#/task' style={{color:'black', textDecoration:'none'}}><Button  style={{ fontFamily: 'Lexend' ,bottom:'0%', background:'none', color:"black"}}><FaGamepad/>
              <p style={{zoom:'80%'}}>Games</p> </Button></a>
            </div>
</div>

);

}


export default home; 
  
