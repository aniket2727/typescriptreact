
// code is wrritten by aniket kadam
// curring in javascript

const Curring=()=>{

    // 
    function curringmain(x:number){
        return function(y:number){
            return x*y;
        }
    };


    const multi10=curringmain(5);
    console.log(multi10(5));



    function curringstring(x:string){
        return function(y:string){
            return `the composed string is ${x}  ${y}`
        }
    }


    const a=curringstring('name');
    console.log(a('my name is aniket kadam'));

    return(
        <div>
            <h1>curring problems</h1>
        </div>
    )
};



export default Curring;