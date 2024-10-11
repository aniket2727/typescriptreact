


// code is written by aniket kadam
// hoc




const Hoc=(Wrapper:React.ComponentType<any>)=>{
    return(props:any)=>{
      return   <Wrapper color='red' {...props}/>
    }
};


const Printline=({color}:{color:any})=>{
   return(
    <div>
        <h1 style={{backgroundColor:color}}>i am good programmer</h1>
    </div>
   )
}

// wrapping the compoent with hoc
const Hoccomponent=Hoc(Printline)

const Maincomponentforhoc=()=>{
    return(
        <div>
             <h1>main components</h1>
             <Hoccomponent/>
        </div>
    )
};




export default Maincomponentforhoc;