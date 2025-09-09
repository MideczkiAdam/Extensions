import { useState } from "react"

function ToggleSwitch(){

    const [toggle, setToggle] = useState(false)

    return(
    <div className="toggleSwitch" 
        onClick={()=>setToggle(!toggle)}
        style={{background: toggle ? "orange" : "grey"}}
        >
        <div className={toggle ? "active" : ""}>
        </div>
    </div>)
}

export default ToggleSwitch