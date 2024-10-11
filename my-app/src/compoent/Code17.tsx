


// code is written by aniket kadam
import React from 'react'

const Code17 = () => {


    const data=[{
        name:'aniket',
        age:'10'
    },{
        name:'vijay',
        age:'20'
    }]
    

    const a:string[]=[];

    for(let i of data){
        console.log(i.name);
        a.push(i.age)
    }

    // console.log("a is ",{...a});

    const obj: { [key: number]: string } = a.reduce((acc, value, index) => {
        // console.log("the value index",index);
        // console.log("the value value",value);
        // console.log("the value acc",acc);
        acc[index] = value;
        return acc;
      }, {} as { [key: number]: string });

    console.log(obj);
  return (
    <div>
        <h1>good is written by aniket kadam</h1>
    </div>
  )
}

export default Code17
