
import { Box,  styled, Typography } from "@mui/material";
 import img from "./whatsapp.png";
 import LockIcon from '@mui/icons-material/Lock';


const Component=styled(Box)`
  
    background:#f8f9fa;
    display:flex;
    height:35.45rem;
    width:61.8vw;
    justify-content:center;
    align-items:center;
    min-width:29rem;
    box-sizing:border-box;
    @media (max-height:631px)
{
     {
       height:35.45rem;
    }
}
    @media (min-height:634px)
{
     {
       height:40.3rem;
    }
}
@media  (min-height:840px)
{
     {
       height:46.65rem;
    }
}
@media  (min-height:1261px)
{
    {
       height:70rem;
    }
}
@media  (min-height:1261px)
{
    {
       width:63.5vw;
    }
}
@media  (max-height:840px)
{
    {
       width:62vw;
    }
}
@media (max-width:1438px)
    {
        width:61.6vw;
    }

    @media (max-width:1286px)
    {
        width:61vw;
    }
    @media (max-width:1096px)
    {
        width:60vw;
    }
    @media (max-width:986px)
    {
        width:59vw;
    }
    @media (max-width:942px)
    {
        width:57.2vw;
    }
    @media (max-width:936px)
    {
        width:56.8vw;
    }
    @media (max-width:894px)
    {
        width:56vw;
    }
    @media (max-width:886px)
    {
        width:55vw;
    }
    @media (max-width:846px)
    {
        width:56vw;
    }
    @media (max-width:836px)
    {
        width:59.6vw;
    }
    @media (max-width:820px)
    {
        width:62.4vw;
    }
`
const Container=styled(Box)`
 
  min-width:36rem;
 text-align:center;
 
`
const Image=styled('img')({
    width:100,
    marginTop:150
});

const Title=styled(Typography)`
   font-size:22px;
   margin:25px 0 10px 0;
   font-family:inherit;
   font-weight:600;
   color:black;
   @media (max-width:892px)
   {
      font-size:20px;
   }
   @media (max-width:810px)
   {
      font-size:19px;
   }
`

const Subtitle=styled(Typography)`
   font-size:15px;
   color:#667781;
   font-weight:400;
   font-family:inherit;
   @media (max-width:892px)
   {
      font-size:14px;
   }
   @media (max-width:810px)
   {
      font-size:12px;
   }

`
const Footer=styled(Box)`
      padding-top:30%;
      font-size:14px;
   color:grey;
   font-weight:400;
   font-family:inherit;
   display:flex;
   justify-content:center;
  opacity:0.5;
   & > svg {
     paddingLeft:15px;
    
   }
`


const Emptychat=()=>
{
      return(
         <Component>
            <Container>
                <Image src={img} alt='image'/>
                <Title>Whatsapp for Windows</Title>
                <Subtitle>Send and receive message without keeping your phone online.</Subtitle>
                <Subtitle>Use Whatsapp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
                <Footer>
                
                 <LockIcon style={{paddingRight:"15px"}}/>
                   <Typography>End-to-end encrypted</Typography>
                
                 </Footer>
            </Container>
         </Component>
      )
}
export default Emptychat;