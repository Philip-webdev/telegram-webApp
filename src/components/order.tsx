import styled from "styled-components";

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
function order(){
    return(
        <div style={{ width: '100%'}}>
            <StyledApp style={{ width: '100%'}}>
            <div style={{width:'100px', height:'100px'}}>
                <p style={{textAlign:'center'}}><img src="https://ouch-cdn2.icons8.com/oTJ6sjphrc0x6AmAo_Q04L_Hohd9QmY_E-gOevGOhJU/rs:fit:368:397/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODAw/LzE4ZGEzMThhLTdi/OTItNGFjNi05YmVh/LTg2YzBmMGVkZWNl/ZC5wbmc.png"/>
                </p>
     </div>
     </StyledApp>
     </div>
    );
}

export default order;