import { Box } from "@mui/system";
import { useState,useContext } from "react";
import { useEffect } from "react";
import { getUsers } from "../Api";
import Communication from "./Communication";
import { AccountContext } from "../AccountProvider";
import styled from "@emotion/styled";

const Component=styled(Box)`
       height:71vh;
       overflow:overlay;
`

const Conversation=({text})=>
{

    const [users,setusers] = useState([]);
    const {account, socket,setActiveUsers}=useContext(AccountContext);
    useEffect(()=>
    {
        const fetchData=async()=>
        {
                let response=await getUsers();
                const filterData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
                setusers(filterData);
        }
        fetchData();
    },[text]);

    useEffect(()=> {
               
             
              
                socket.current.emit('addUsers',account);
            
              
                  socket.current.on("getUsers",users=> {
                   
                        setActiveUsers(users)
                    }        
    )
                      
    },[users.socketId]);

     return (
        <>
            <Component>
                {
                       users.map(user=>(
                        user.sub!==account.sub &&
                       <Communication user={user}/>
                      ))
                }
            </Component>
        </>
     )
}
export default Conversation;