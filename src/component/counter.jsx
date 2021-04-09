import React, {useState} from "react"

function Counter(props){
    const [count, setCount] = useState(0)

    const onButtonClick = (event) =>{
        setCount(count+1)
    } 
    
    return (
        <>
        <h2>u can decreas and increas numbers:  {count}</h2>
        <button onClick={onButtonClick}></button>
        <button onClick={onButtonClick}>1</button>
        <button onClick={onButtonClick}>100</button>
        <button onClick={onButtonClick}>-5</button>
        <button onClick={onButtonClick}>-1</button>
        <button onClick={onButtonClick}>-100</button>

      </>
    )
}

export default Counter



