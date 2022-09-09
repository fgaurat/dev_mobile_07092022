import { add, toUpper } from "./lib"

export function Hello(props){
    console.log(props)
    const result = add(1,2)
  
    const user = {
      firstName :props.fname,
      lastName :props.name,
    }
    return (
      <div>
        <h1 >Hello {user.firstName+" "+toUpper(user.lastName)}</h1>  
        <span>c = {result}</span>
      </div>
    )
  }