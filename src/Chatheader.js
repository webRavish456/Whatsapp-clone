import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import {  styled } from '@mui/system';
import { useContext } from "react";
import "./chat.css";
import { AccountContext } from "./AccountProvider";


const Head=styled(Box)`
   
    box-sizing:border-box;
    padding:10px;
    height:4.45rem;
    display:flex;
    width:61vw;
    min-width:23rem;
    @media (max-height:631px)
{
     {
       height:4.45rem;
    }
}
    @media (min-height:634px)
{
     {
       height:5rem;
    }
}
@media  (min-height:840px)
{
     {
       height:5.8rem;
    }
}
@media  (min-height:1261px)
{
    {
       height:7rem;
    }
}

    @media (max-width:1060px){
      width:57vw;
    }
    @media (max-width:942px){
      width:55vw;
    }
    @media (max-width:877px){
      width:52vw;
    }
`;
const Header=styled(Box)`
   
    
    display:flex;
    width:23rem;
`;

const Image=styled('img')
({
      height:45,
      width:45,
      objectFit:'cover',
      borderRadius:'50%'
});
 const Name=styled(Typography)`
  margin-left:12px !important;
 `;
 const Status=styled(Typography)`
  margin-left:12px !important;
  font-size:12px;
  color:rgb(0,0,0,0.6);
 `;

 const Right=styled(Box)`
 
   cursor:pointer;
   display:flex;
   width:100%;
   justify-content:end;
 
   & > svg {
     padding:7px 3px 7px 7px;
     display:flex;
  
  
  
   }
  
`


 
    
const Chatheader=({person})=>
{

    const {activeUsers}=useContext(AccountContext);
     
      return(
        <>
        <Head>
       
          <Header>
              <Image src={person.picture} alt='dp'/>
              <Box>
                 <Name>{person.name}</Name>
                 <Status>{activeUsers?.find(user=>user.sub === person.sub)? 'Online': 'Offline'}</Status>
              </Box>
              </Header>
              <Right>
                  <VideoCallOutlinedIcon/>
                  <CallRoundedIcon/>
                  <SearchIcon style={{borderLeft:"2px solid grey",marginLeft:"1rem"}}/>
                  </Right>
             
        </Head>
        </>
      )
}
export default Chatheader;
