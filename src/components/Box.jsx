import { useState } from "react"

export const  Box=(props)=>{
    const [onState,setOnState]=useState(props.on);
    const changeValue=()=>{
        setOnState((prevState)=>{
            return !prevState
        })
    }

    const styles={
        backgroundColor:onState?"#222222":"transparent"
    }
    return(
        <div  className="box" style={styles} onClick={()=>{props.handleClick(props.id)}} >{props.on}</div>
    )
}