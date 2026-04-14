import React, { useState } from 'react'

export const ToggleButton = () => {
    const[visible, setVisible] = useState(false)
  return <div className='flex justify-center items-center mt-18 flex-col'>
    <button className='text-white bg-blue-400 px-3 rounded-sm py-2' onClick={() => setVisible(prev => !prev)}>
        {visible ? "hide" : "show"}
    </button>

   { visible && <div className='mt-3'>im a toggle button </div>}
  </div>
}
