import { Avatar, Divider, Typography } from "@mui/material";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import React from "react";
import "./profile.css";
import { Box, styled } from "@mui/system";
import { useContext } from "react";

import { AccountContext } from "./AccountProvider";

const Container=styled(Box)`
   display:flex;
   padding-top:10px;
`
const Wrapper=styled(Box)`
   background:#ffffff;
   
   margin-top:-10px;
  
   & :first-child {
    font-size:16px;
    color:#4A4A4A;
    font-weight:200;
   }
   & :last-child {
      margin:1rem 0;
      color:black;
   }
`

const Profile=()=>
{
    const {account}=useContext(AccountContext);
     return (
        <>
            <div className="profile">
                <div className="profile_left">
                 <Container> 
              <LaptopWindowsIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>                  
              <p>General</p>
              </Container>
              <Container> 
              <KeyRoundedIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Account</p>
                    </Container>
                    <Container> 
                <ChatBubbleOutlineRoundedIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Chats</p>
                    </Container>
                    <Container> 
                <NotificationsOutlinedIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Notifications</p>
                    </Container>
                    <Container> 
                    <StorageOutlinedIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Storage</p>
                    </Container>
                    <Container> 
                    <KeyboardIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Shortcuts</p>
                    </Container>
                    <Container> 
                    <InfoOutlinedIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Help</p>
                    </Container>
                    <Container style={{marginTop:"80px",display:"flex"}}> 
                    <PersonOutlineOutlinedIcon style={{paddingRight:"10px",color:"black",opacity:"0.7"}}/>
                    <p>Profile</p>
                    </Container>
                </div>
                <Divider orientation="vertical"/>
                <div className="profile_right">
                     <Avatar style={{width:"100px",height:"100px"}}><img style={{width:"100px",height:"100px"}}src={account.picture} alt="profile"/></Avatar><br></br>
                     <h3>Ravish Kumar</h3><br></br>
                     <Wrapper>
                         <Typography>About</Typography>
                         <Typography>Eat! Sleep! Code! Repeat!</Typography>
                         </Wrapper>
                         <Wrapper>
                         <Typography>Phone Number</Typography>
                         <Typography>+91 9876543210</Typography>
                     </Wrapper>
                </div>
            </div>
        </>
     ) 

}
export default Profile;
