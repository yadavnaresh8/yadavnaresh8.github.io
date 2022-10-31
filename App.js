import React,{useState} from 'react'
import Event from './Event';
import Fakeapi from './Api';
import Form from './Form';
import Serach from './Serach';
import Fetch from './Fetch';
import Todo from './Todo';
const App = () => {
  const [name,useNmae]=useState(
    {
      hello:"naresh",
      age:45
    }
  )
  const {hello,age}=name;
  return (
    <div>


<h1> My Name is {name.hello} My age is {name.age}</h1>
<h1> My name is {hello} My Age is {age}</h1>
{/* <Event/> */}
{/* <Form/> */}
{/* <Serach/> */}
{/* <Fakeapi/> */}
<Todo/>
<Fetch/>
    </div>
  )
}

export default App