import React, { useEffect } from "react";
import { useState } from "react";



export default function StopWatch(){


    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    let intervalID;

    useEffect(()=>{

        console.log("setInterval is a browser api in which passes a call back function as input to update the setTime evry 1000ms ie 1sec") ;
      
        if(isRunning){
           intervalID = setInterval(()=>{           
                setTime(prevTime => prevTime+1); 
            },[1000]);    
           
        }else{
            clearInterval(intervalID);
        }
       
        return () => clearInterval(intervalID);

    },[isRunning])

    const startTimer=()=>{
        console.log("Timer started",time) ;
        setIsRunning((prevIsRunning) =>!prevIsRunning);    //flipping the IsRunning state variable 
    };

   const resetTimer =()=>{
    setIsRunning(false);
    setTime(0);
   }

   const formatTime =(elapsedSeconds)=>{

    const minutes = Math.floor(elapsedSeconds/60);
    const seconds = elapsedSeconds % 60;
    return  `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
   }

    return(<>
         <h1>StopWatch</h1>
            <p>Time: {formatTime(time)}</p> 
        <div>
            <button className="buttons" onClick={startTimer}> 
                    {isRunning ? 'Stop' : 'Start'}
            </button>
            <button className="buttons" onClick ={resetTimer}>Reset</button>
        </div>   

    </>);


}