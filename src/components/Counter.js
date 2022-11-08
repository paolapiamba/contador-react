import { useState } from "react"
//app.js-> import counter from './ 
const Counter = (props) =>{
    const [count,setCount] = useState(0)

    return (
        <>
        <button onClick={() => setCount(count - 1)}>
            restar
        </button>
        <span>cantidad: {count}</span>
        <button onClick={() => setCount(count + 1)}>
            contar
        </button>
        <br/>
        </> 
    )   
}

export default Counter