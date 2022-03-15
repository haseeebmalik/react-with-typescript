import React from "react"

type ButtonProps={
    //the below handleClick is for a function which is neither having parameters nor returning any value
    // handleClick:()=> void
    handleClick:(event: React.MouseEvent<HTMLButtonElement>,id:number)=> void
}

export const Button=(props:ButtonProps)=>{
    return <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
}