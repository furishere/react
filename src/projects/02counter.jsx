import React, { useState } from 'react'

export const Counter = () => {
    const[value, setValue] = useState(0)

    function increase(){
        setValue(c => c + 1)
    }

    function decrease(){
        setValue(c => c - 1)
    }

    return <div className='flex gap-3'>
    {value}
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>decrease</button>
    </div>
}
