import { useState } from "react";

function miner(){
    const points = document.getElementById('')?.innerText;
    const [defaultValue, setValue] = useState('0');
    if (('localStorage' in window) && window['localStorage'] !== null) 
        
       
     
     
        {
            if (points != undefined){
        const result = {point: points}
        const value = setValue(result.point)
    
        localStorage.setItem('newPoint', value);
    
        }
    }

    return(
        <div>

        </div>
    );
}

export default miner;