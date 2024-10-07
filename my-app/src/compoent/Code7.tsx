import { useState } from "react";
import { ReportHandler } from 'web-vitals';

// code is written by aniket kadam
type aa={
    q:string,
    a:string
}

const Code7=()=>{

    const[data,setdata]=useState<aa[]>([{q:'what is your name',a:'aniket'},
        {q:'what is your color',a:'red'},{q:'what is your sport',a:'cricket'}
    ]);

    const[flag,setflag]=useState<boolean[]>(new Array(data.length).fill(false));
    console.log(flag);


    const handleshowans=(index:number):void=>{
          if(flag[index]){
              const updateflags=[...flag];
              updateflags[index]=!updateflags[index];
              setflag(updateflags);
          }
          else{
            const updatedflags=[...flag];
            updatedflags[index]=!updatedflags[index];
            setflag(updatedflags);
          }
         
    }
    return(
        <div>
            <h1>ans and qesutions</h1>
            {
                data &&
                data.map((item,index)=>(
                    <div key={index}>
                         <h1 onClick={()=>handleshowans(index)}>{item.q}</h1>
                         {
                              flag[index] ? <div>{item.a}</div> : null
                         }
                    </div>   
                ))
            }
        </div>
    )
};



export default Code7;

