import { Avatar } from "@mui/material";
import { Box ,styled} from "@mui/system";
import React from "react";
import { useContext } from "react";

import { AccountContext } from "./AccountProvider";

const Container=styled(Box)`
   display:flex;
   padding-top:20px;
   z-index:99;
   height:35.45rem;
   width:22vw;
`
const Component=styled(Box)`
   
   padding-left:20px;
   border:1px solid white;
   float: left;
    background-Color:white;
    height:35.45rem;
    min-width: 13.6rem;
   box-shadow: -1px 4px 20px -6px #000;
   margin-top:242px;
   margin-left:54px;
   position:absolute;

   @media (max-height:631px)
{
     {
       height:35.3rem;
       
    }
}
@media (min-height:634px)
{
     {
       height:40.1rem;
      
    }
}
@media  (min-height:840px)
{
     {
       height:46.6rem;
    }
}
@media  (min-height:1261px)
{
    {
       height:70rem;
      width:22.45vw;
    }
}
  
 `

const Status=()=>
{
    const {account}=useContext(AccountContext);

    return(
        <>
            <Component>
             <h3 style={{paddingTop:"15px"}}>Status</h3>
             <div>
                <Container>
                    <Avatar img src={account.picture} />
                    <div style={{paddingLeft:"20px",fontSize:"14px"}}>
                    <h4>My status</h4>
                    <h4 style={{color:"#4A4A4A"}}>No updates</h4>
                    </div>
                    
                    </Container>
             </div>
             </Component>
        </>
    )
}
export default Status;