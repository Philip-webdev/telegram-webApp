import { useState } from "react";
import 'react-icons/bs';
import { BsArrowLeftCircle } from "react-icons/bs";
import styled from "styled-components";



const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
  position: fixed;
 
  @media (prefers-color-scheme: dark) {
    background-color:  rgb(29, 40, 58);
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;
function miner(){


    const points = document.getElementById('')?.innerText;
    const [defaultValue, setValue] = useState('0');
    if (('localStorage' in window) && window['localStorage'] !== null) 
        
       
     
     
        {
            if (points != undefined){
        const result = {point: points}
        const value = setValue(result.point)
    
      //  localStorage.setItem('newPoint', value);
    
        }
    }

    return(
        <div style={{width:'100%'}}>
            <StyledApp style={{ width: '100%'}}>
            <em><p>coming soon</p></em>
            </StyledApp>

        </div>
    );
}

export default miner;