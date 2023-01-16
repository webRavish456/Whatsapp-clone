import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import SendIcon from '@mui/icons-material/Send';


const Mic = ({handle}) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const [data,setData]=useState();

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }
 

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl,
    
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true
  });

  {mediaBlobUrl && status && status === "stopped" && 
    
  fetch(mediaBlobUrl)
  .then(res=>res.blob())

 
  
  .then(blob=>
    {
         
        const myFile=new File([blob],"demo.mp3",{type:"audio/webm"});
      

      
         readFile(myFile);
    })

    function readFile(input) {
          const fr= new FileReader();
          fr.readAsDataURL(input);
          fr.addEventListener('load',()=>{
              const re =fr.result;
              setData(re);
              console.log(data);
          })
    }
    
  }
  

  return (
    <div>

      <div style={{ height: "38px",paddingTop:"55px"}}>
       
        <audio src={mediaBlobUrl} style={{width:'14rem'}} controls></audio>



      </div>

      <div
        className="col-md-6 col-md-offset-3"
        style={{
          display:"flex",
          color: "black",
          marginLeft: "12rem"
        }}
      >
        
        <div style={{ marginLeft: "50px", fontSize: "20px", marginTop:"-27px"}}>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>

        <div style={{ marginLeft: "20px", display: "flex" ,marginTop:"-23px"}}>
          <label
            style={{
              fontSize: "15px",
              fontWeight: "Normal"
             
            }}
            htmlFor="icon-button-file"
          >
            <div>
              <button
                style={{border:"none",outline:"none",background:"none",color:"red",paddingRight:"8px"}}
                onClick={() => {
                  if (!isActive) {
                    startRecording();
                  } else {
                    pauseRecording();
                    stopRecording();
                    stopTimer();
                  }

                  setIsActive(!isActive);
                }}
              >
                {isActive ? <PauseIcon/> : <MicIcon/>}
              </button>
         
             <button onClick={event=>handle(data)} style={{border:"none",background:"none"}}><SendIcon style={{color:"green",cursor:"pointer"}}/></button>
             
            </div>
          </label>
        </div>
        <b></b>
      </div>
  
   </div>
  );
};
export default Mic;