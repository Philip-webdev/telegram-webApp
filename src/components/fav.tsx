import { useEffect, useState } from "react";
import styled from "styled-components";

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
    

  // Replace with your actual bot token
  const BOT_TOKEN = '7224317370:AAHNjnqB1gf3d74o2dVAPYSWkwfLQ_CiEnw';
  
  const storage = () => {
   
      // Function to save data to Telegram Cloud Storage
      const saveToCloudStorage = async (key: string, value: string) => {
          try {
              const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setChatData`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      product_Id: 'banana',
                      price: '200$'
                      }
                  ),
                });
                const data = await response.json();
                console.log('Save response:', data);
          } 
          catch (error) {
              console.error('Error saving to cloud storage:', error);
          }
      };
  
      // Function to load data from Telegram Cloud Storage
      const loadFromCloudStorage = async (data: string) => {
          try {
              const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatData`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      product_Id:'banana',
                      price:'300$'
                  }),
              });
              const data = await response.json();
              return data.result || null; // Return the value or null if not found
          } catch (error) {
              console.error('Error loading from cloud storage:', error);
          }
      };
  

          // Example usage
          saveToCloudStorage('productName', 'banana');
          loadFromCloudStorage('productName').then((productName) => {
              console.log('Loaded productName:', productName); // Should log 'John Doe'
          });
      }
  
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
const [data, setData] =useState(null)
const doings = ()=>{
fetch('https://twa-backend-g83o.onrender.com/telegram-webApp/orderly') 
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error fetching data:', error))
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
</StyledApp>
        </div>
    );
}

export default favourites;