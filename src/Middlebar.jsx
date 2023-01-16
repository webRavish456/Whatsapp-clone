
import SearchIcon from '@mui/icons-material/Search';
import "./middlebar.css";
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Conversation from "./menu/Conversation";
import { useState } from 'react';

const Middlebar = (props) => {


   
const [text,setText]=useState('');
  

  return (
   <>
      
     <div className='middlebar'>
       <div className='middlebar_header'>
        <h2 style={{paddingLeft:"1.2rem"}}>Chats</h2>
        
       <img style={{width:"18px",height:"18px",marginLeft:"44%",paddingTop:"5px"}} src='https://www.pngfind.com/pngs/m/275-2755033_edit-png-file-on-phone-svg-edit-icon.png' alt='logo'/>
       <MoreHorizIcon  style={{paddingLeft:"1%",paddingTop:"5px"}}/>
       </div>
      
      
      <div className='search'>
           <input type="text" placeholder='Search or start a new Chat' style={{border:"none" ,paddingLeft:"1px",paddingTop:"5px",boxSizing:"content-box"}} onChange={(e)=>setText(e.target.value)}/>
          
           <SearchIcon style={{marginLeft:"8%",color:"gray",cursor:"pointer",paddingTop:"4px"}} setText={setText}/>
         
           </div>
              <Conversation text={text} style={{display:"flex"}}/>
           </div>
           </>
   
  )
}

export default Middlebar;