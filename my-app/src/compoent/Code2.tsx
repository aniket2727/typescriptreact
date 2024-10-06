

// to do list

import { useState } from "react";

const Code2=()=>{

    const[data,setdata]=useState<string[]>([]);
    const[item,setitem]=useState<string>('');

    const handleAddData=(p:string):void=>{
         setdata([...data,p]);
    }

    const handleRemoveData=(p:string):void=>{
         const finditem=data.filter(item=>item!==p);
         setdata(finditem);
    }
    return(
        <div>
             <h1>to do list</h1>
             <input onChange={(e)=>setitem(e.target.value)} value={item} name="item"/>
             <button  onClick={()=>handleAddData(item)}>Add</button>
             {
                data && data.map((item,index)=>(
                    <div  style={{display:'flex', alignItems:'center', justifyContent:'center'}} key={index}>
                        <h1>{item}</h1>
                        <button onClick={()=>handleRemoveData(item)}>delete</button>
                    </div>    
                ))
             }
        </div>
    )
};

export default Code2;