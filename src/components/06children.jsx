export default function App(){
  return <div className="flex p-4 m-4">
    <Card>
    hi im here
    </Card>
    <Card>
    are u there?
    </Card>
  </div>
}

function Card({children, className}){

  return <div className="bg-blue-400 text-white text-2xl">
    {children}
  </div>
}