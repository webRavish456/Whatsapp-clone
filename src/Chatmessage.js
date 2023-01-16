import { Box, styled } from "@mui/material";
import Chatfooter from "./Chatfooter";
import { useContext,useState ,useEffect,useRef} from "react";
import { AccountContext } from "./AccountProvider";
import {getMessage, newMessage} from "./Api";
import "./chat.css";

import Chatheader from "./Chatheader";
import Message from "./Message";


const Wrapper=styled(Box)`
    
    height:35.45rem;
    display:flex;
    flex-direction:column;
    min-width:29.2rem;
    box-sizing:border-box;
    width:61.8vw;
   

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
@media  (max-width:2072px)
{
    {
       width:63vw;
    }
}
@media  (max-width:2018px)
{
    {
       width:62.8vw;
    }
}
@media  (max-width:1720px)
{
    {
       width:62.4vw;
    }
}
@media  (max-width:1624px)
{
    {
       width:62vw;
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
    @media (max-width:1246px)
    {
        width:60.75vw;
    }
    @media (max-width:1160px)
    {
        width:60.4vw;
    }
    @media (max-width:1136px)
    {
        width:60.2vw;
    }
    @media (max-width:1108px)
    {
        width:60vw;
    }
    @media (max-width:1096px)
    {
        width:60vw;
    }
    @media (max-width:1016px)
    {
        width:59.4vw;
    }
    @media (max-width:1000px)
    {
        width:59vw;
    }
    @media (max-width:966px)
    {
        width:58vw;
    }
    @media (max-width:942px)
    {
        width:57.2vw;
    }
    @media (max-width:936px)
    {
        width:56.8vw;
    }
    @media (max-width:912px)
    {
        width:56.2vw;
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
        width:56.2vw;
    }
    @media (max-width:820px)
    {
        width:56.4vw;
    }
   

   

   
`
const Component=styled(Box)`

    padding: 10px 0.3rem;
    overflow-y: auto; 
    flex:1;
    display:flex;
    flex-direction:column;
   background-image:url('https://wallpaperaccess.com/full/785668.jpg');
   background-size:110% 90vh;
    min-inline-size:15rem;
   
`
const Container1=styled(Box)`

min-width:25rem;


`

const Container=styled(Box)`
    padding: 9px 0.7rem;
   
`

const Chatmessage=({person,conversation})=>
{
    const [value,setValue]=useState('');
    const [messages,setMessages]=useState([]);
   
    const [file,setfile]= useState();
    const [image,setImage]=useState('');
    const [incomingMessage, setIncomingMessage]=useState(null);
   

    const {account,socket, newMessageFlag, setnewMessageFlag}=useContext(AccountContext);

    

    useEffect(()=>
    {
          socket.current.on('getMessage', data =>
          {
               setIncomingMessage({
                ...data,
                createdAt: Date.now()
               })
          })
    },[])

    useEffect(()=>
    {
        const getMessageDetails=async ()=>
        {
            let data= await getMessage(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    },[person._id,conversation._id,newMessageFlag]);

     

      useEffect(()=>
      {
            incomingMessage && conversation ?. members ?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage])
      }, [incomingMessage,conversation])


  

   
    const sendText=async(e)=>{
        const code=e.keyCode || e.which;
        if(code===13)
        {
             let message={};
             if(value!=="" || image!==""){
            if(!file){
             message={
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'text' ,
                text:value
            }
           
        } 
        else {
              message={
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'file',
                text:image
               
            }
           
        }


            socket.current.emit('sentMessage', message);

             await  newMessage(message);

             setValue('');
             setfile('');
             setImage('');
             setnewMessageFlag(prev=>!prev);
            
        }
    }
    }




     return (
        <>
        
         <Wrapper>
         
         <Chatheader person={person}/>
       
         <Component >
               {
                  messages && messages.map(message=>(
                    <Container  >
                        <Message message={message} />
                    </Container>
                     
                  ))
               }
          

               </Component>
               <Container1>
               <Chatfooter  sendText={sendText} setValue={setValue} value={value} file={file} setfile={setfile} setImage={setImage}   />
               </Container1>
         </Wrapper>

           
        </>
     )
}
export default Chatmessage;
  