import React from 'react'
import LoginDialog from './LoginDialog'
import {AppBar,Toolbar,styled} from "@mui/material";
import { Box } from '@mui/system';
import {useContext} from 'react';
import { AccountContext } from './AccountProvider';
import App from './App';



const LoginHeader =styled(AppBar)` 
    height:200px;
    background-color: #27d190;
    box-shadow: none;
   
`;
const Bx=styled(Box)`
      height:auto;
      width:100%;
      min-width:54rem;
      overflow:hidden;
      
`;
const Messenger = () => {
const {account}=useContext(AccountContext);


  return (
    <div>
    <Bx >
       {
           account? 
      
          <App/>
         
       
         
           
             
       :
       <>
    <LoginHeader>
   <Toolbar>
    
   </Toolbar>
    </LoginHeader>
    <LoginDialog/>
          </>
       }
    </Bx>
    
    </div>
  )
}

export default Messenger;