import React, { useState } from 'react'
import './MiniTask.css';
function MiniTask() {
    const [input, setInput] = useState(1);
    const increase = () => {
        if (input < 1000)
            setInput(input + 1);
        else
            setInput(1000);
        // console.log(input)

    }
    const decrease = () => {
        if (input > 1)
            setInput(input - 1);
        else
            setInput(1);
    }
    const change = (event) => {
        let val = parseInt(event.target.value);
        if (event.target.value != "")
            setInput(val);
        else
            setInput(1)
        if (input > 1000)
            setInput(1000);
        if (input < 1)
            setInput(1);
    }
    return (
        <div className='container'>
            <button className='minus' onClick={decrease}>-</button>
            <input className='num' type="text" value={input} onChange={change} />
            <button className='plus' onClick={increase}>+</button>
        </div>
    )
}

export default MiniTask