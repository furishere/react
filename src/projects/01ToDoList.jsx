import { useState } from "react"

export default function TodoList(){
    const [list, setList] = useState('')
    const [newArr, setNewArr] = useState([])

    function add(){
        setNewArr([
            ...newArr,{
                text : list
            }
        ]),

        setList("")
    }


    return <div className="flex justify-center">
        <div className="bg-blue-700 w-full max-w-sm h-screen max-h-67 mt-8 rounded-sm">
        <div className=" flex items-center justify-center">
        <h1 className="text-white text-2xl mt-8">To-Do List </h1>
        </div>
        <div className="flex items-center justify-center">
            <input value={list} onChange={ e => setList(e.target.value)} className="bg-white m-2 outline-none rounded-sm" type="text" placeholder="add here"/>
            <button 
            onClick={add} className="bg-red-800 text-white px-3 rounded-sm">add</button>
        </div>
        <div className="flex text-left justify-center text-md w-full max-w-sm">
        <ul className="text-left text-white w-full max-w-56 ">
                {newArr.map((arr, index) => (
                    
                    <li className="mt-1" key={index}>{arr.text}
                    <button className="bg-red-800 text-white px-3 rounded-sm"> delete </button>
                    </li>
                    
                ))}
            </ul>
        </div>
        </div>
    </div>
}