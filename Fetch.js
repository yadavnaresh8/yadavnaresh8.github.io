import React,{useState,useEffect}from 'react';
import Data from './Hello.json';
import './App.css'

const Fetch = () => {
    const[search,setSearch]=useState("");
    const [data,setData]=useState([""]);

    useEffect((e)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => setData(data))
    })
  return (
    <center>
    <div>
        <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>

        <thead>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
            </tr>
        </thead>
        {Data.filter(name=>name.body.toLowerCase().includes(search.toLowerCase()))
        .map(name=>
            <tbody>
                <tr>
           <td>{name.userId}</td>
           <td>{name.id}</td>
           <td>{name.title}</td>
           <td>{name.body}</td>
           <td><button>Delet</button></td>
            </tr>
            </tbody>

            )
        }
    </div>
    </center>
  )
}

export default Fetch