


// code is written by aniket kadam

import { count } from "console";
import { useState } from "react";



const Code8=()=>{
    const[data,setdata]=useState<string[]>(["aniket","vijay","kadam"]);
    const[counter,setcounter]=useState<number>(0);
     
    const handlePrev=()=>{
        console.log("counter in prev",counter);
        if(counter!==0){
            //  setcounter(prev=>prev-1);
            setcounter(counter-1);
        }
    };

    const handleNext=()=>{
        console.log("counter in next",counter);
         if(counter<=data.length-1){
            //setcounter(prev=>prev+1)
            setcounter(counter+1);
         }
    }

    return(
        <div>
            <h1>slider</h1>
            {
                data && data.map((item,index)=>(
                    <div key={index}>
                       { counter===index?<h1>{item}</h1>:null}
                    </div>    
                ))
            }

            <div style={{display:'flex', alignItems:'center',margin:'10px'}}>
                  <button onClick={()=>handlePrev()}>prev</button>
                  <button  onClick={()=>handleNext()}>next</button>
            </div>
        </div>
    )
};



export default Code8;