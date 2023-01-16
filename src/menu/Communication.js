import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext ,useEffect,useState} from "react";
import { AccountContext } from "../AccountProvider";
import { setConversation,getConversation } from "../Api";
import { formatDate } from "../common-utils";

const Component=styled(Box)`
     display:flex;
     height:45px;
     padding:13px 0;
     cursor:pointer;
`;

const Image=styled('img')({
      width:50,
  height:50,
  borderRadius:'50%',
  padding:'0px 14px',
})

const Name=styled(Typography)`
    
    padding:5px 5px;
    font-weight:600;
     
`

const Container=styled(Box)`
    display:flex;
  
`
const Timestamp=styled(Typography)`
     font-size:12px;
     margin-left:auto;
     color:#00000099;
     margin-right:20px;
`
const Text=styled(Typography)`
     font-size:14px;
     color:rgba(0,0,0,0.6);
     padding:0px 5px;
     
`

const Communication=({user})=>
{
    
   const {setPerson,account, newMessageFlag}=useContext(AccountContext);

   const [message, setMessage]=useState({});

   useEffect(()=>
   {
     const getConversationDetails = async ()=>
     {
       const data =  await getConversation({senderId:account.sub,receiverId:user.sub});
       setMessage({text: data?.message, timestamp: data?.updatedAt})
     }
     getConversationDetails();
   },[newMessageFlag])

   const getUser=async()=>{
       setPerson(user);
       await setConversation({senderId:account.sub,receiverId:user.sub})
   }

    return (
        <Component onClick={()=>getUser()}>
            <Box>
               <Image src={user.picture} alt="dp"/>
             
            </Box>
            <Box style={{width:"100%"}}>
            <Container>
                   <Name>{user.name}</Name>
                   {
                     message?.text && 
                     <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                   }
            </Container>
             <Box>
               {(()=>
               {
                     if(message?.text?.includes('data'))
                     {
                        return (
                          <div>
                          <Text>media</Text>
                          </div>
                        )
                         
                     }  
                     else if(message?.text?.includes('server'))
                     {
                         return (
                         <div>
                         <Text>media</Text>
                         </div>
                         )
                       
                     }
                     else{
                       return (
                       
                          <div>
                           <Text>{message.text}</Text>
                        </div>
                       )
                     }
               })()}
             
             
         
             </Box>
           </Box>
        </Component>
    )
}
export default Communication;