

// emi calucalatores

import React, { useState } from "react";

// define type of state

type loanData={
    price:string;
    year:number;
    interestRate:number;
};


const Code3=()=>{
    const [data,setdata]=useState<loanData>({price:'',year:0,interestRate:0})

    const handleAddData=(e:React.ChangeEvent<HTMLInputElement>):void=>{
         const{name,value}=e.target;
         setdata((prev)=>({...prev,[name]:value}));
    }


    const handlesubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
            e.preventDefault();
            console.log(data);
    }
    return(
        <div>
           <form onSubmit={handlesubmit}>
           <input value={data.price}  name="price" onChange={handleAddData}/>
           <input value={data.interestRate}  name="interestRate" onChange={handleAddData}/>
           <input value={data.year}  name="year" onChange={handleAddData}/>

           <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                    Calculate EMI
                </button>
           </form>
        </div>
    )
};


export default Code3;