import { useState } from "react"
import { Boxes } from "../boxes"
import { Box } from "./Box";
export const BoxesComponents=(props)=>{
    const[BoxesArray,setBoxesArray]=useState(Boxes);
    const styles={
        
        backgroundColor:props.darkMode?"":"#cccccc"
    }
    const toggle=(id)=>{
       const newArrays=[]
       for(let i=0;i<BoxesArray.length;i++){
        const currentArray=BoxesArray[i];
        if(currentArray.id===id){
            const updateArray={
                ...currentArray,
                on:!currentArray.on
            }
            console.log(updateArray.id);
            newArrays.push(updateArray)
        }
        else{
            newArrays.push(currentArray)
        }
       }
       
       return newArrays
       }

    const displayableBox=BoxesArray.map((each)=>{
        return(
            
            <Box key={each.id} 
            on={each.on}
            handleClick={toggle}
            id={each.id}
            />
        )
    })
    return(
        <div >{displayableBox}</div>
    )
}