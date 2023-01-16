

import { useContext,useEffect,useState } from "react";
import Chatmessage from "./Chatmessage";

import { AccountContext } from "./AccountProvider";
import { getConversation } from "./Api";
import "./chat.css";

const Chatbox=()=>
{
    const {person,account}=useContext(AccountContext);
    const [conversation,setConversation]=useState({});
    useEffect(()=>
    {
        const getConversationDetails=async()=>
        {
           let data = await getConversation({senderId:account.sub, receiverId:person.sub});
          
           setConversation(data);
        }
        getConversationDetails();
    },[person.sub]);

     return (
        <>
     
         <Chatmessage person={person} conversation={conversation}/>
       
        
           
        </>
     )
}

export default Chatbox;