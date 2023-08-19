import React ,{useState }from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login() {
const [show,setshow]=useState(false);
  let Navigate = useNavigate();
  const [credentials,setcredentials]=useState({username:"",password:""})

  const handleLogin = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/loginuser",{
      method:'POST',
      headers:{
           'content-Type': "application/json"
      },
      body:JSON.stringify({username:credentials.username,password:credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if(!json.success){
      alert("user exist")
    }
    if(json.success){
      localStorage.setItem("username",credentials.username);
      setshow(true)
     
      Navigate("/Home")
      // alert("loged in")
    }
  }

  const handleSignin = async(e)=>{
   
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createuser",{
      method:'POST',
      headers:{
           'content-Type': "application/json"
      },
      body:JSON.stringify({username:credentials.username,password:credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if(!json.success){
      alert("enter correct information")
    }
    if(json.success){
      alert("user created")
      
      localStorage.setItem("username",credentials.username)
      Navigate("/Home")
    }
  }
  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>

<form className='login_form' >
  
  <div className="mb-3">
   
    <label htmlFor="exampleInputUsername1" className="form-label">
      User Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputUsername1"
      aria-describedby="usernameHelp"
      name='username'
      value={credentials.username}
      onChange={onChange}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      name='password'
      value={credentials.password}
      onChange={onChange}
    />
  </div>
  <div className='buttons_div'>

  <button type="submit" className="btns " onClick={handleLogin}>
     Login 
  </button>
  <button type="submit" className="btns " onClick={handleSignin}>
    Register
  </button>
  </div>
</form>



    </div>
  )
}
