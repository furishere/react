import React from 'react'

export const DescribingTheUi = () => {

  return <div>
    <FirstComponent />
    <Avatar />
  </div>
  
}

function Profile(){
    return <img src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"

    alt='scintiest'/>
}

function FirstComponent(){
    return <div>
        <h1>Amazing Scientist</h1>
        <Profile />
        <Profile />
        <Profile />
    </div>
}

const person = {
    name  : 'george',
    theme : {
        backgroundColor : 'black',
        color : 'pink'
    }
}

function TodoList(){

    return <div>
        <div style={person.theme}></div>
        <h1>{person.name}</h1>
        <ul>
            <li>Improve the vudeophone</li>
            <li>prepare the lecture</li>
        </ul>
    </div>
}

// curly braces
function Avatar(){
  const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return <div>
    <img 
    className='avatar'
    src={avatar} 
    alt={description} />

    <h1>hi my name is {description}</h1>
  </div>

}