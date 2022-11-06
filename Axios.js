import React,{useState,useEffect} from 'react'
import axios from 'axios';



const Api = () => {
    const [data,setData]=useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setData(res.data))
    })

  return (
    <div>


{data.map(item => <li>{item.id}
{item.title}
{item.body}</li>
)}


    </div>
  )
}

export default Api
