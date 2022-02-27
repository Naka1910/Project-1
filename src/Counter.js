import { useState } from "react";

export default function Counter(){
const[value,setValue]=useState(1)
return(
    <div className="Counter">
        <button className="Counter-button" onClick={()=>{setValue(value-1)}}>-</button>
        <p className="Counter-value">{value}</p>
        <button className="Counter-button" onClick={()=>{setValue(value+1)}}>+</button>
    </div>
)
}