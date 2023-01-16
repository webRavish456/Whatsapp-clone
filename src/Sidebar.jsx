import './sidebar.css';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar } from '@mui/material';
import Status from "./Status";
import { useState } from 'react';
import Middlebar from './Middlebar';
import Header from './Header';
import Profile from './Profile';
import Setting from './Setting'
import { Box, styled } from '@mui/system';
import Chat from './Chat';


const Component = styled(Box)`
position:relative;
flex:0.25;
display:flex;

`
const Container1=styled(Box)`
position:absolute;
background-color:#ededed;
height:35.45rem;
display:flex;
@media (max-height:631px)
{
     {
       height:35.45rem;
    }
}
@media (min-height:634px)
{
     {
       height:40rem;
    }
}
@media  (min-height:840px)
{
     {
       height:46rem;
    }
}
@media  (min-height:1261px)
{
    {
       height:70rem;
    }
}
`
const Container2=styled(Box)`
position:absolute;
left:70px;

`
const Container3=styled(Box)`

position:absolute;
left:100%;

`


function Sidebar ()
{
   const [showPicker, setShowPicker] = useState(false);

   const [show,setShow]=useState(false); 
   const [profile,setProfile]=useState(false); 
   const [status,setStatus]=useState(false);
  
   const set=()=>
   {
       setShow(!show);
   } 
   const pro=()=>
   {
       setProfile(!profile);
   } 
   const sta=()=>
   {
      setStatus(!status);
   }

   return(
    <>
     <Component>
     <Container1>

<div className='sidebar_header'>
<div className='chatOut' ><div className='dropdown'>Chats</div>

<ChatOutlinedIcon />

  </div>
  <div className='chatin' ><div className='dropdown'>Status</div>
  <div className='set'>
  {status && <Status/>}
  </div>

  <DonutLargeOutlinedIcon onClick={sta} style={{marginTop:"20px"}}/> 


</div>


<div className='sidebar_footer'>
<div className='chatOut' >
<div className='dropdown'>Settings </div>
<div className='set'> { show  && <Setting/> }</div>
 <SettingsOutlinedIcon onClick={set} />

  </div>

<div className='chatin' ><div className='dropdown'>Profile</div>
<div className='set'> {profile &&  <Profile /> } </div>
<div onClick={pro}>
<Avatar style={{width:"25px",height:"25px",marginTop:"20px",display:"flex"}}  onClick={()=>setShowPicker((val)=>!val)}> <Header/></Avatar>
</div>
</div>
</div>
 </div>
   </Container1>
  
     <Container2>
<Middlebar/>  


   
     <Container3>
     <Chat/>
     </Container3>
     </Container2>
     </Component>
          
    </>
   )

}
export default Sidebar;
