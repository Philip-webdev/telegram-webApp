import styled from "styled-components";
import { loadConfigFromFile } from "vite";
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
        
const ProductsArray = [product1, product2, product3, product4, product5, product6, product7, product8];

 const Load =()=>{ ProductsArray.map((products) =>{ 
  const ajaxElement = document.createElement('li');
ajaxElement.textContent = products;
  const ajaxContainer  = document.getElementById('containerr');

ajaxContainer?.appendChild(ajaxElement);
});}
  
    return(
        <div style={{ width: '100%'}}>
<StyledApp onLoad={Load} style={{width:'100%'}}>
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

</StyledApp>
        </div>
    );
}

export default favourites;