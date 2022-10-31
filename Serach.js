import React,{useState} from 'react'
import Data from './Hello.json';


const Serach = () => {
    const[search,setSearch]=useState("");
  return (
    <div>
        <center>
            <h1>Search Data</h1>
            <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {Data.filter (name=>name.title.toLowerCase().includes(search.toLowerCase()))
            .map(name=>
                <li>{name.title}</li>
                )
            
            }
        </center>
    </div>
  )
}

export default Serach