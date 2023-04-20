import { useState } from "react"
import { Meme } from "../memeData"
export const Form=()=>{
    const [allMemesImages,setAllMemesImages]=useState(Meme)
    const  [memeImage,setMemeImage]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    })
    const randomMeme=()=>{
        const memesArray=Meme.data.memes
        const randomNumber=Math.floor(Math.random()* memesArray.length)
        const url=memesArray[randomNumber].url
      setMemeImage((prevState)=>{
        return {...prevState, randomImage:url}
      })
      console.log(memeImage);
    }
    const handlingForm=(e)=>{
        const {name,value}=e.target
        setMemeImage((prev)=>{
        return(
            {
                ...prev,
                [name]:value
            }
        )
        })
    }
    console.log(memeImage);
   
    return(
        <main>
            <div className="form">
                <input type="text"  placeholder="input one" className="input" onChange={handlingForm}  name="topText"  value={memeImage.topText}/>
                <input type="text"  placeholder="input two" className="input"  onChange={handlingForm} name="bottomText"  value={memeImage.bottomText}/>
                <button className="submit" onClick={randomMeme}>Get a new meme image 🖼️</button>
                
            </div>
           < div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}
