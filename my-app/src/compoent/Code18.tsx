
// code is written by aniket kadam

import React from 'react'

const Code18 = () => {


    const data=[{
        name:"aniket",
        age:'10',details:{
            post:'maneger'
        }
    },
    {
        name:"vijay",
        age:'10',details:{
            post:'maneger',
            ares:'phaltan'
        }
    },{
        name:"aniket",
        age:'10',details:{
            post:'maneger'
        }
    }];

    // console.log(data.details.post)
     const a:{[key:number]:string}={}
     
     data.forEach((item,index)=>{
        a[`${index}`]=item.details.post;
     });


     console.log(a);
  return (
    <div>
         <h1>objet</h1>
    </div>
  )
}

export default Code18
