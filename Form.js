import React,{useState} from 'react'

const Form = () => {
    const[data,setData]=useState({
        username:"",
        phonenumber:"",
        password:"",
        confirmpassword:""
    })
    const{username,phonenumber,password,confirmpassword}=data;
    
    const changeHandler =e=>{
        setData({...data,[e.target.name]:(e.target.value)})
    }
    const submitHandler =e=>{
        e.preventDefault();
        if(username.length <=5){
            alert("User Name must be 5 latters")
        }
        if(phonenumber.length !=10){
            alert("Enter Phone Number")
        }
       else if(password!==confirmpassword){
            alert("password do not match")
        }
    }

  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Username' name='username' value={username} onChange={changeHandler}/><br/>
            <input type="nummber" placeholder='Enter Phone Number' name='phonenumber' value={phonenumber} onChange={changeHandler}/><br/>
            <input type="password" placeholder='Enter Password' name='password' value={password} onChange={changeHandler}/><br/>
            <input type="confirmpassword" placeholder='Re-Enter Password' name='confirmpassword' value={confirmpassword} onChange={changeHandler}/><br/>
            <input type="submit" value={"Submit"}/>
            </form>
        </center>
    </div>
  )
}

export default Form