import { useContext } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { formatDate,downloadMedia } from "./common-utils";
import { AccountContext } from "./AccountProvider";
import GetAppIcon from '@mui/icons-material/GetApp';
import {iconPDF} from "./data.js";
import {iconPPTX} from "./data.js";
import {iconDoc} from "./data.js";
import {icontxt} from "./data.js";





const Own=styled(Box)`
      background:#dcf8c6;
      max-width:48%;
      justify-content:start;
      padding:5px;
      width:fit-content;
      display:flex;
      border-radius:4px;
      word-break:break-word;
      margin-left:auto;
`
const Wrapper=styled(Box)`
    
      background:#ffffff;
      max-width:48%;
      justify-content:start;
      padding:5px;
      width:fit-content;
      display:flex;
      border-radius:4px;
      word-break:break-word;
     
     
`
const Text=styled(Typography)`
  font-size:14px;
  padding:0px 4rem 5px 5px;
  

`
const Txt=styled(Typography)`
  font-size:14px;
  padding:9px 0px 5px 5px;

`
const Time=styled(Typography)`
     font-size:10px;
     color:#919191;
     margin-top:10px;
     word-break:keep-all;
    box-sizing: border-box;
`

export const Message=({message})=>
{
 


       const {account}=useContext(AccountContext);

    return (
        <>
           { 
             account.sub===message.senderId ?
      
               <Own>
                      {
                        message.type === 'file'? <ImageMessage message={message}/> :<TextMessage message={message} />
                      }
                 
               </Own>
              
               :
               <Wrapper>
                      {
                        message.type === 'file'? <ImageMessage message={message}/> :<TextMessage message={message} />
                      }
               </Wrapper>
               }
          
        </>
       
    )
}

const ImageMessage=({message})=> 
{
      return (
        <div>
             <Box style={{position:'relative',display:"flex",justifyContent:"end"}}>
                 {(()=>{
                          if( message?.text?.includes('.pdf'))
                          {
                            return (
                              <div>
                              <Box style={{display:"flex"}}>
                          <img src={iconPDF} alt="pdf" style={{width:'6rem'}}/>
                          <Typography style={{fontSize:14}}>{message.text.split('file-').pop()}</Typography>
                          
                          <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"darkblue"}}>{formatDate(message.createdAt)}</Time>
                         </Box>
                         <div style={{position:'absolute',border:"1px solid black",backgroundColor:"black",borderRadius:"50%",display:"flex",width:"2rem",height:"2rem",right:"5px",alignItems:"center",justifyContent:"center",top:"1.3rem",cursor:"pointer"}}>
                        <GetAppIcon onClick={(e)=>downloadMedia(e, message.text)}
                         style={{color:'whitesmoke',width:'3rem'}}/>
                            </div>
                              </div>
                             
                            )
                          
                          }
                          else if(message?.text?.includes('.pptx'))
                          {
                            return(
                              <div>
                              <Box style={{display:"flex"}}>
                          <img src={iconPPTX} alt="pptx" style={{width:'6rem'}}/>
                          <Typography style={{fontSize:14}}>{message.text.split('file-').pop()}</Typography>
                          <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"darkblue"}}>{formatDate(message.createdAt)}</Time>
                         </Box>
                             <div style={{position:'absolute',border:"1px solid black",backgroundColor:"black",borderRadius:"50%",display:"flex",width:"2rem",height:"2rem",right:"5px",alignItems:"center",justifyContent:"center",top:"1.3rem",cursor:"pointer"}}>
                            <GetAppIcon onClick={(e)=>downloadMedia(e, message.text)}
                              style={{color:'whitesmoke',width:'3rem'}}/>
                             </div>
                              </div>
                            )
                            
                          }
                          else if(message?.text?.includes('.docx'))
                          {
                            return(
                              <div>
                              <Box style={{display:"flex"}}>
                          <img src={iconDoc} alt="docx" style={{width:'6rem'}}/>
                          <Typography style={{fontSize:14}}>{message.text.split('file-').pop()}</Typography>
                          <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"darkblue"}}>{formatDate(message.createdAt)}</Time>
                         </Box>
                         
                           <div style={{position:'absolute',border:"1px solid black",backgroundColor:"black",borderRadius:"50%",display:"flex",width:"2rem",height:"2rem",right:"5px",alignItems:"center",justifyContent:"center",top:"1.3rem",cursor:"pointer"}}>
                              <GetAppIcon onClick={(e)=>downloadMedia(e, message.text)}
                          style={{color:'whitesmoke',width:'3rem'}}/>
  
                                </div>
                              </div>
                            )
                            
                          }
                          else if(message?.text?.includes('.txt'))
                          {
                            return(
                              <div>
                              <Box style={{display:"flex"}}>
                          <img src={icontxt} alt="txt" style={{width:'6rem'}}/>
                          <Typography style={{fontSize:14}}>{message.text.split('file-').pop()}</Typography>
                          <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"darkblue"}}>{formatDate(message.createdAt)}</Time>
                         </Box>
                            
                         <div style={{position:'absolute',border:"1px solid black",backgroundColor:"black",borderRadius:"50%",display:"flex",width:"2rem",height:"2rem",right:"5px",alignItems:"center",justifyContent:"center",top:"1.3rem",cursor:"pointer"}}>
                           <GetAppIcon onClick={(e)=>downloadMedia(e, message.text)}
                           style={{color:'whitesmoke',width:"3rem"}}/>
                            </div>
                              </div>
                            )
                            
                          }
                          else if(message?.text?.includes('.mp4'))
                          {
                            return(
                              <div>
                              <Box style={{display:"flex",justifyContent:"center",paddingBottom:"2rem",position:"relative"}}>
                          <video width="170rem" height="209rem" controls>
                            <source  src={message.text}/>
                          </video>
                          <Txt style={{position:"absolute",bottom:"0px"}}>{message.text.split('file-').pop()} </Txt>
                          <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"darkblue",bottom:"-3px"}}>{formatDate(message.createdAt)}</Time>
                         </Box>
                         
                              </div>
                            )
                            
                          }
                          else if(message?.text?.includes('.mp3'))
                          {
                            return(
                              <div>
                              <Box style={{display:"flex",position:"relative",justifyContent:"start",paddingBottom:"2rem"}}>
                          <audio src={message.text}  style={{width:'11rem',display:"flex"}} controls/>
                          <Txt style={{position:"absolute",top:"3rem"}}>{message.text.split('file-').pop()} </Txt>
                          <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"darkblue",top:"4.2rem"}}>{formatDate(message.createdAt)}</Time>
                         
                         </Box>
                              </div>
                            )
                            
                          }
                          else 
                          {
                            return(
                              <div>
                              <Box style={{display:"flex"}}>
                           <img style={{width:'12rem',height:'100%',objectFit:"cover"}} src={message.text} alt={message.text}/>
                  
                           <Time style={{position:'absolute',alignSelf:"end",right:0,marginRight:5,color:"white"}}>{formatDate(message.createdAt)}</Time>
                           </Box>

                             <div style={{position:'absolute',border:"1px solid black",backgroundColor:"black",borderRadius:"50%",display:"flex",width:"2rem",height:"2rem",right:"5px",alignItems:"center",justifyContent:"center",top:"1.3rem",cursor:"pointer"}}>
                             <GetAppIcon onClick={(e)=>downloadMedia(e, message.text)}
                                 style={{color:'whitesmoke',width:"3rem"}}/>
  
                             </div>
                              </div>
                            )
                           
                          }
                          
                 })()}
                  
                
             </Box>
             </div>
      )
}



const TextMessage=({message})=> 
{
      return (
        <>
         <Box style={{position:"relative",display:"flex"}}>
        
            {
              message?.text?.includes('data')?
             <Box style={{paddingBottom:"15px"}}>
              <audio src={message.text} style={{width:'11rem'}} controls></audio>
              <Time style={{position:"absolute",right:0,bottom:0,float:"right",color:"darkblue"}}>{formatDate(message.createdAt)}</Time>
            </Box>
              :
              <Text>{message.text}
              <Time style={{position:"absolute",right:0,bottom:0,float:"right"}}>{formatDate(message.createdAt)}</Time>
              </Text>
             
            }
           
       
            </Box>
        </>
      )
}

export default Message;