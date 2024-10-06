
//  this is typescript file

import React, { useState } from 'react'

const Code1 = () => { 
    // data with the array string
    const[data,setData]=useState<string[]>([]);
    //input data string
    const[inputdata,setinputdata]=useState<string>('');
   
    const handleData=(item:string):void=>{
        setData([...data,inputdata]);
    }

    return (
        <div>
          {/* Set the input value to the inputdata state */}
          <input 
            value={inputdata}
            onChange={(e) => setinputdata(e.target.value)} 
          />
          {/* Example button to trigger handleData */}
          <button onClick={() => handleData(inputdata)}>Add Data</button>
    
          {/* Display the data array */}
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Code1;