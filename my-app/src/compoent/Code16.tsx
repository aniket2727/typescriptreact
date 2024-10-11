


// code is written by aniket kadam


import React from 'react'

const Code16 = () => {


    const a={
        x:10,
        y:20
    }


    const b=a;
    b.x=100;
    console.log("the value a is ",a);
    console.log("the value of b is ",b);


    const aa = { x: 10, y: 20 };
    const bb = { ...aa };  // Creates a shallow copy of 'a'
    b.x = 100;

    console.log("the value of a is ", aa);  // Outputs: { x: 10, y: 20 }
    console.log("the value of b is ", bb);  // Outputs: { x: 100, y: 20 }





  return (
    <div>
       <h1>code 16</h1>   
    </div>
  )
}

export default Code16
