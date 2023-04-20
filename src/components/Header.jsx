import { IMAGE } from "./Image"
export const Header=()=>{
    return(
        <div className="header">
             <img src={IMAGE.image1} alt="meme logo" className="memeLogo" />
             <h2 className="headerTitle">meme Generator</h2>
        </div>
    )
}