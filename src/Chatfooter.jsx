import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import "./chat.css";
import React ,{useState} from "react";
import { Box ,styled} from '@mui/system';
import { InputBase } from '@mui/material';
import { useEffect } from 'react';
import { uploadFile } from './Api';
import Picker from 'emoji-picker-react';
import Mic from './Mic';



const Container = styled(Box)`
     height:0.3px;
     background:lightgrey;
     display:flex;
     width:100%;
     align-items:center;
     padding:0,20px;
   

     &> * {
        margin:5px;
        color:gray;
        padding-left:5px;
        margin-bottom:-45px;
       
     }
`
const Search=styled(Box)`
        background-color:#ffffff;
        border-radius:3px;
        width:100%;
        height:35px;
`
const InputField=styled(InputBase)`
       width:100%;
       word-break:break-word;
      display:flex;
    
`
const Component=styled(Box)`
 
 display:flex;
 box-shadow: -1px 4px 20px -6px #000;
 z-index:99;
position:absolute;
margin-top:-23rem;
left:10px;

`
const ContainMic=styled(Box)`
     height:55px;
     background:lightgrey;
     display:flex;
     width:100%;
     justify-content:end;
    
     &> * {
        margin-top:-55px; 
     }
`


function Chatfooter({sendText,setValue,value,file,setfile,setImage})
{
     useEffect(()=>
     {
            const getImage =async()=>
            {
                if (file)
                {
                    const data = new FormData();
                    data.append("name", file.name);
                    data.append("file",file);
                  
                  let response = await uploadFile(data);
                
                  setImage(response.data);
                 
                }
            }
            getImage();
     },[file]) 
     
    const onFileChange=(e)=>
    {
       
           setfile(e.target.files[0]);
           setValue(e.target.files[0].name);
           e.target.value='';
    }


    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (emojiObject) => {
   
     setValue((prevInput)=>prevInput+emojiObject.emoji);
      setShowPicker(false);
    };

    const [showAudio,setShowAudio]= useState(false);

    const Micon=()=>
    {
      
        setShowAudio(!showAudio)
    }

    
    const handle=item=>
    {
      setShowAudio(!showAudio)
    
     
       setValue(item);
    }
    
         
    return(
     
        <>
       
      { !showAudio && <Box style={{position:"relative"}}>
      <Component>
     
         {showPicker && <Picker onEmojiClick={onEmojiClick} height="22.5rem" width="19rem"  onChange={(e)=>onEmojiClick(e)} />}
        
          </Component>
          <Container>
       
           <EmojiEmotionsIcon onClick={()=>setShowPicker((val)=>!val)} />
          
        

           <label htmlFor='fileinput'>
           <AttachFileIcon style={{transform:"rotate(40deg)"}}/>
           </label>
          
            <input type="file" id="fileinput" style={{display:"none"}} onChange={(e)=>onFileChange(e)}/>
        <Search>

        <InputField placeholder='Type a message' onChange={(e)=>setValue(e.target.value)} onKeyPress={(e)=>sendText(e)} value={value} />
        </Search>
           
         
           <MicIcon onClick={Micon}/>
           </Container>
           </Box>
      }
      <ContainMic>
      <div style={{marginRight:"25px"}}>
      {  showAudio && <Mic handle={handle}/>}
      </div>
      </ContainMic>
        </>
    )
}
export default Chatfooter;

