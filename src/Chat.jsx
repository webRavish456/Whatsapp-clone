import React from "react";
import "./chat.css";
import Chatbox from "./Chatbox";
import {useContext} from "react";
import { AccountContext } from "./AccountProvider";
import Emptychat from "./Emptychat";
function Chat()
{
    const {person}=useContext(AccountContext);
    return(
        <>
       
 <div className="chat">
 {Object.keys(person).length?<Chatbox/>:<Emptychat/>}
 </div>
        </>
    )
}
export default Chat;


