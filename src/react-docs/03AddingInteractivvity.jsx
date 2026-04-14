import React from 'react'

export const AddingInteractivvity = () => {
  return <div>
    <Toolbar onplaymovvie={() =>  alert("play movie")}/>
    <Toolbar onuploadimage={() =>  alert("image updated")}/>
  </div>
}

function Events(){

}

function Toolbar({onplaymovvie, onuploadimage}){
    
    return <div>
        <Button onClick={onplaymovvie}> play movie</Button>
        <Button onClick={onuploadimage}> upload image </Button>
    </div>
}

function Button({onClick, children}){
    return <button onClick={onClick}>
        {children}
    </button>
}