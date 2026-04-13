import { useState } from "react"

export default function App(){
  const [value, setValue] = useState(34)

  function updateNumber(){
    setValue(c => c + 1)
  }

  return <div>
    <button onClick={updateNumber}>Click me </button>
    <p>{value}: value  is increasing</p>
    {value % 2 == 0 && "im multiple of two"}
  </div>
}

const ToggleMessage = () => {
  const[notification, setNotification] = useState(0)

  function increment(){
    setNotification(c => c + 1)
  }
  return <div>
    <button className="p-4 border m-3" onClick={increment}>Notification</button>
    {notification}
  </div>
}