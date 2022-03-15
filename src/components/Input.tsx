import React from "react"

type InputProps={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
}
export const Input=(props:InputProps)=>{
    //we can also define handleChange function inside the component like below
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("event",event)
    }
    return <input type='text' value={props.value}
    //  onChange={props.handleChange}
    onChange={(e)=>{handleInputChange(e)}}
     
     />
}