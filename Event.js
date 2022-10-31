import React,{useState} from 'react'

const Event = () => {
    const[data,setData]=useState('');
  return (
    <div>


<button onClick={()=> alert("this is not working")}>Click</button>
<h1>{data}</h1>
<form>
    <input type="text" placeholder='Enter Email' name='name' onChange={(e)=>setData(e.target.value)} />
</form>

    </div>
  )
}

export default Event