import React,{useState} from 'react'
import Todolist from './Todolist';
 

const Todo = () => {
    const[list,setList]=useState('');
    const[todos,setTodos]=useState([]);
    const changehandler=e=>{
        setList(e.target.value);
    }
    const submithandler=e=>{
        e.preventDefault();
       const newtodos=[...todos ,list];
       setTodos(newtodos);
       setList('');
       
    }
    const delethandler=(indexvalue)=>{
        const newTodos=todos.filter((todo,index)=> index!==indexvalue);
        setTodos(newTodos);
    }
  return (
    <div>
        <center>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'>
                        <form onSubmit={submithandler}>
                            <input type="text" name="todo" value={list} onChange={changehandler}/> 
                            <input type="submit" value="add"/>
                        </form><br/>
                        <Todolist todolist={todos} deletindex={delethandler}/>
                    </div>
                </div>
            </div>

        </center>
    </div>
  )
}

export default Todo