export default function Condition(){

  return <div>
    <ThePost 
    name={"im rohan"}
    description={"idk why im here"}
    age={19}
    location={"mumbai"}
    />
  </div>
}

function ThePost({name, description, age, location}){
  return <div>
   hi im {name}, <br />
   this is my description: {description} <br />
   my age is {age} <br />
   and im {age < 18 ? "young" : "old"}
   {location === 'mumbai' && <p> {location}</p> }
  </div>
}