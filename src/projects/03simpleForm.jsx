import { useState } from "react"

export default function  SimpleFormApplication(){

    return <div>
        <SignUp />
    </div>
}

function SignUp(){
    const [name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[visible, setVisible] = useState(false)

    function handlesubmit(e){
        e.preventDefault() // stop page reload

        if(name === "" || email === "" || password === ""){
            alert ("please fill all fields")

            return
        }

        setVisible(true)

    }

    return <div className="m-2">
        <form onSubmit={handlesubmit}>
        <div>
         <label>
            <span>Enter your name : </span>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
        </label>
        </div>
        <div>
        <label>
            <span>Enter your email : </span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
        </label>
        </div>
        <div>
         <label>
            <span>Enter your password : </span>
            <input value={password} onChange={(e) => setPassword(e.target.value) } type="password" placeholder="password" />
        </label>
        </div>

        <button className="border px-2 mt-3" type="submit">submit</button>
        </form>

       { visible && <div>
        <div>your name is : {name}</div>
            <div>your password is : {password}</div>
            <div>your email is : {email}</div>
            <div> form submitted sucessfully</div>
        </div>}
    </div>
}
