import React from 'react'

const Todolist = ({todolist,deletindex}) => {
  return (
    <div>
        {todolist.map((todo,index)=><div key={index}> 
        <h5>{todo} &nbsp; <button onClick={()=>deletindex(index)}>Delet</button></h5>
        
        </div>)}

    </div>
  )
}

export default Todolist