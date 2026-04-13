import { useRef } from "react"

export default function App(){
  const inputRef = useRef()

  function focusInput(){
    inputRef.current.focus()
  }

  return <div>
    sign up 
    <input className="bg-red-400" ref={inputRef} type="text" />
    <button className="bg-blue-500 text-white border rounded-md py-2 px-3" onClick={focusInput}>submit</button>
  </div>
}

// so useRef just store value And not do ui re render, does something in dom, no re-render