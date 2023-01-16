import React from 'react';
import { Dialog ,Box,Typography, ListItem, List} from '@mui/material';
import {qrCodeImage} from './data';
import {  styled } from '@mui/system';
import {useContext} from 'react';
import {GoogleLogin}   from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from './AccountProvider';
import  {addUser} from "./Api";


const Component=styled(Box)`
  display: flex;
  @media (max-width:592px){
    display:grid;
  }
 
`;
const Container=styled(Box)`
 padding: 3rem 0px 3rem 2rem;

 @media (max-width:592px)
 {
  padding: 3rem 1rem 2rem 1rem;
 }

`;

const Title=styled(Typography)`
     font-size: 26px;
     color:#525252;
     font-weight: 300px;
     font-family: inherit;
     margin-bottom:25px;
`;
const Lst=styled(List)`
  &>li
padding: 0px;
      margin-top: 15px;
      font-size: 18px;
      line-height: 28px;
      color:#4a4a4a;
      min-width:11rem;

      @media (max-width:592px){
        font-size:16px;
        line-height:20px;
        margin-top:13px;
      }
     
`;

const Qrcode=styled('img')({
    height:"250px",
    width: "18%",
    margin:`50px 0 0 1rem`,
    minWidth:"17rem",
    '@media (max-width:756px)':
    {
        display:"flex",
        margin:`50px 0 0 1rem`,
        height:"250px",
     
    },
 '@media (max-width:592px)':
 {
     display:"flex",
     margin:'-10px 0 0 20%',
     height:"70%",
  
 },
 '@media (max-width:515px)':
 {
     display:"flex",
     margin:'-10px 0 0 18%',
     height:"70%",
  
 },
 '@media (max-width:455px)':
 {
     display:"flex",
     margin:'-10px 0 0 15%',
     height:"70%",
  
 },
 '@media (max-width:416px)':
 {
     display:"flex",
     margin:'-10px 0 0 12%',
     height:"70%",
  
 },
 '@media (max-width:392px)':
 {
     display:"flex",
     margin:'-10px 0 0 10%',
     height:"70%",
  
 },
 '@media (max-width:362px)':
 {
     display:"flex",
     margin:'-10px 0 0 3%',
     height:"70%",
    
 }
});

const Qrimage=styled(Box)`
position:relative;
`;

const Google=styled(Box)
`
   position:absolute;
   top: 160px;
   transform:translateX(45%);
   width:70%;
   margin:0 0 0 -3rem;
   minWidth:17rem;


   @media (max-width:756px)
 {
     display:"flex";
     top:150px;
    
 }
   @media (max-width:592px)
 {
     display:"flex";
     top:80px;
     justify-content:center;
     margin:0 0 0 -3%;
 }
 @media (max-width:515px)
 {
     display:"flex";
     top:70px;
     justify-content:center;
     margin:0 0 0 -30px;
 }

   @media (max-width:361px)
 {
     display:"flex";
     top:60px;
    justify-content::center;
    margin:0 0 0 -17%;
 }

`


 const dialogStyle={
    height:'100%',
    marginTop: '12%',
    maxWidth:'100%', 
    boxShadow:'0px 0px 20px 0px #dcdcdc ',
    overflow:'auto',
 
 }


const LoginDialog = () => {

    const {setAccount}=useContext(AccountContext);

const onLoginSuccess=async(res)=>
{
    const decoded=jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
   
}

const onLoginError=(res)=>
{
     console.log('Login Failed',res);
}

  return (
    <div>

          
             <Dialog  
                 open={true}
                 PaperProps={{sx:dialogStyle}}
                 hideBackdrop={true}
                
                
                 >
                 <Component>
           
                  <Container>
             
                     <Title>To use WhatsApp on your computer </Title>
                   
                      <Lst>
                     <ListItem>1. Open WhatsApp on your phone  </ListItem>
                     <ListItem>2. Tap Menu Settings and select Linked Devices </ListItem>
                     <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                     </Lst>
                 
                     </Container>
             
                <Qrimage>
                     <Qrcode src={qrCodeImage} alt='qr code'/>
                     <Google>
                            <GoogleLogin 
                               onSuccess={onLoginSuccess}
                               onError={onLoginError}
                               />
                     </Google>
                </Qrimage>
                </Component>

              </Dialog>
              
    </div>
  )
}

export default LoginDialog;
