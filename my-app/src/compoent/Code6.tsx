

// add and delete into the aray of objet


import { useState } from "react";
type person={
    name:string,
    age:number
}
const Code6=()=>{
    const[data,setdata]=useState<person[]>([]);
    const[name,setname]=useState<string>('');
    const[age,setage]=useState<string | number>('');

    const handleAddData=():void=>{
             setdata((prev) => [...prev, { name, age: Number(age) }]);
             setname('');
             setage('')
    }

    const handleRemovedata=(name:string):void=>{
          const filterdata=data.filter(item=>item.name!==name);
          setdata(filterdata)
    }
    return(
        <div>
            <h1>Add and delete into the array</h1>
            <input value={name} onChange={(e)=>setname(e.target.value)}/>
            <input  value={age} onChange={(e)=>setage(e.target.value)}/>
            <button onClick={()=>handleAddData()}>Add</button>
            {
                data &&<div>
                       {
                           data.map((item,index)=>(
                            <div key={index}   style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                 <h1>{item.name}</h1>
                                 <h1>{item.age}</h1>
                                 <button onClick={()=>handleRemovedata(item.name)}>delete</button>
                            </div>    
                           ))
                       }
                    </div>
            }

        </div>
    )
}


export default Code6;