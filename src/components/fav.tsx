
import { BsHeart, BsFillWalletFill, BsCart3 } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "./styled/styled";

function favourites(){
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
    

  
  

  
        var product1 = localStorage.getItem( "product 1" );
       var product2 = localStorage.getItem('product 2');
      var product3 = localStorage.getItem('product 3');
       var product4 = localStorage.getItem('product 4');
        var product5 = localStorage.getItem('product 5');
         var product6 = localStorage.getItem('product 6');
           var product7 = localStorage.getItem('product 7');
            var product8 = localStorage.getItem('product 8');
         var product9 = localStorage.getItem('product 9');
        
//onst ProductsArray = [product1, product2, product3, product4, product5, product6, product7, product8];



function removeproduct() {
  localStorage.removeItem('product 1');
  localStorage.removeItem('product 2');
  localStorage.removeItem('product 3');
  localStorage.removeItem('product 4');
  localStorage.removeItem('product 5');
  localStorage.removeItem('product 6');
  localStorage.removeItem('product 7');
  localStorage.removeItem('product 8');
  localStorage.removeItem('product 9');

   const visibility = {noView: 'none'}
 var divdisplay = document.getElementById('containerr');
if (divdisplay != null){
 divdisplay.style.display = visibility.noView;
}
}

const doings = ()=>{
fetch('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly') 
            .then(
                async (response)=>{
               const result = response.json();
              const parsedResult = JSON.parse(await result);
           //   for (let i = 0; i <=8; i++){
              console.log(parsedResult);
            //  }
              //console.log(parsedResult.price)
            })
           // .then(data => JSON.parse(data))
        

           // .catch(error => console.error('Error fetching data:', error))
}
    return(
        <div style={{ width: '100%'}}>
<StyledApp  style={{width:'100%'}}>
<h2> Your spotlights</h2>
<ul id="containerr" style={{
  listStyle:'none'
}}>
  <li>{product1}</li>
  <li>{product2}</li>
  <li>{product3}</li>
  <li>{product4}</li>
  <li>{product5}</li>
  <li>{product6}</li>
  <li>{product7}</li>
  <li>{product8}</li>
  <li>{product9}</li>

</ul>
<button  onClick={doings}>get all</button>

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

export default favourites;