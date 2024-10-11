


// code is written by aniket kadam

const Closures=()=>{

    function printData(){

        const a:number=10;
          function inner(b:any){
               console.log("the multiplication is ",a*b);
          }
          return inner;
    };


    const c=printData();
    c(20);  // Will log the multiplication directly
    return(
        <div>
            <h1>this is closures </h1>
        </div>
    )
};



export default Closures;