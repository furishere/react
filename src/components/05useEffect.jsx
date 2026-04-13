import { useEffect, useState } from "react"

export default function App(){
  const[count, setCount] = useState(1)
  function increaseCount(){
    setCount( c => c + 1)
  }

  useEffect(() => {
      const clock = setInterval(increaseCount, 500)

      return () => {
        clearInterval(clock)
      }
  },[])

  return <div>
  {count}  
  </div>
}

// 1. Definition

// useEffect is a React Hook used to handle side effects in functional components.

// Side effects are operations that interact with things outside the component’s rendering process.

// 2. What are Side Effects?

// Examples include:

// Fetching data from an API
// Setting up timers (setInterval, setTimeout)
// Adding event listeners
// Logging or debugging
// Manually interacting with the DOM

// useEffect(() => {}) → runs every render
// useEffect(() => {}, []) → runs once
// useEffect(() => {}, [value]) → runs when value changes