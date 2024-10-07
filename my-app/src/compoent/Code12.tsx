// Code written by Aniket Kadam
import { useState } from "react";

const Code12 = () => {
  const [counter, setCounter] = useState<number>(0);
  const formCount = [1, 2, 3]; // Array to represent the number of forms


  const handlesubmit=():void=>{
       console.log("the value of counter",counter);
       
       if(counter<3){
          setCounter(prev=>prev+1);
       }
  }


  const handlegoto=(item:number):void=>{
     setCounter(item);
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {formCount.map((item, index) => (
          <div style={{ margin: '10px' }} key={index}>
            <button style={{backgroundColor:item===counter?'red':'green'}} onClick={() => handlegoto(item)}>{item}</button>
          </div>
        ))}
      </div>

      {counter === 1 ? (
        <div>
          <h1>Form Number One</h1>
          {/* Form content for the first form */}
          <button onClick={()=>handlesubmit()}>submit</button>
        </div>
      ) : counter === 2 ? (
        <div>
          <h1>Form Number Two</h1>
          <button onClick={()=>handlesubmit()}>submit</button>
          {/* Form content for the second form */}
        </div>
      ) : counter === 3 ? (
        <div>
          <h1>Form Number Three</h1>
          <button onClick={()=>handlesubmit()}>submit</button>
          {/* Form content for the third form */}
        </div>
      ) : (
        <div>
          <h1>Please select a form to display</h1>
        </div>
      )}
    </div>
  );
};

export default Code12;
