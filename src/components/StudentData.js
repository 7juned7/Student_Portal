import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "../screens/css/Home.css"
export default function StudentData() {
  
  const Navigate = useNavigate();
  const username = localStorage.getItem("username");
  const rollno = localStorage.getItem("studentRollno");
 
 
  
  const[studentMarksData,setstudentMarksData] = useState([]);
  
  const [credentials,setcredentials]=useState({studentname:"",rollno:"",midsemno:"",endsemno:"",practicalno:""})
  
  const loadData = async ()=>{
    

   let res = await fetch("http://localhost:4000/api/studentData",{
    method:"POST",
    headers:{
      'content-Type':'application/json'
    }
   });
   res = await res.json();
    
   
   
   setstudentMarksData(res[1]);
     
   

  }
  
  useEffect(()=>{
    
    loadData()
    
  },[])
  
  const  localdata = ()=>{
return studentMarksData.filter(
  (data)=>((data.rollno===rollno)&&(data.username===username))
)
    
  }

  const data = localdata()
 
  let id = data.map(data=>{
    return data._id
  }) 
let rollnos = studentMarksData.filter(
  (data)=>((data.username===username))
  ).map(data=>{
  return data.rollno
})
console.log(rollnos)


  
  localStorage.setItem("marksId",id)
  const isEmpty = (obj)=>{
    return Object.keys(obj).length === 0
  }

const flag = isEmpty(data);

console.log(localStorage)


  const handleSubmit = async (e)=>{
    
    
      const response = await fetch("http://localhost:4000/api/createStudentMarksData",{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body: JSON.stringify({username:username,studentname:credentials.studentname,rollno:credentials.rollno,midsemno:credentials.midsemno,endsemno:credentials.endsemno,practicalno:credentials.practicalno})
      }
      
      );
      const json = await response.json()
      if(!json.success){
        console.log(json)
        alert("rollno exist")
        console.log("error in sending student nos ")
      }
      if(json.success){
        Navigate("/Home")
  
        
      
    }
    
  
  }
  const handleedit = async (e)=>{
    e.preventDefault();
    
   
    
      id = localStorage.getItem("marksId")
    const response = await fetch("http://localhost:4000/api/updateStudentMarksData",{
      method:"POST",
      headers:{
        'content-Type':"application/json"
      },
      body: JSON.stringify({_id:id,studentname:credentials.studentname,rollno:credentials.rollno,midsemno:credentials.midsemno,endsemno:credentials.endsemno,practicalno:credentials.practicalno})
    }
    
    );
    const json = await response.json()
    if(!json.success){
      console.log(json)
      console.log("error in sending student nos")
      alert("rollno exist")
    }
    if(json.success){
      
   
     Navigate("/Home")
      
    }
  
  }

const  onChange= (e)=>{
  setcredentials({...credentials,[e.target.name]:e.target.value})
}
const render =()=>{

  return(
    <div>{
      
        
        studentMarksData.filter((filterdata)=>(filterdata.rollno === rollno && filterdata.studentname===localStorage.getItem("studentName")))
        .map(data=>{
          return(
            <div  key={data._id}>
              {

                <div className='container'> 
                <form className='form' onSubmit={handleedit} >
                
                <div className='left' >

                  <div className="mb-3">
                  <label className="form-label">
                    Student Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername1"
                    aria-describedby="usernameHelp"
                    name='studentname'
                    value={credentials.studentname}
                    onChange={onChange}
                    required
                    
                  />
                  
                  
                </div>
          
                </div>
                <div className='right' >

                <div className="mb-3">
                  <label className="form-label">
                    Enter Mid Sem no:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername1"
                    aria-describedby="usernameHelp"
                    name='midsemno'
                    value={credentials.midsemno}
                    onChange={onChange}
                    required
                    
                  />
                  
                </div>
                <div className="mb-3">
                  <label  className="form-label">
                    Enter End Sem no:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name='endsemno'
                   value={credentials.endsemno}
                   onChange={onChange}     
                   required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Enter Practical no:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name='practicalno'
                    
                    value={credentials.practicalno}
                    onChange={onChange}
                  
                    required
                  />
                </div>
                <button type="submit" className="btns">
                  Submit
                </button>
                </div>
                

                
                
                
              </form>
              </div>
              }
            </div>
          )
        })
      }</div>
  )
}

  return (

    
       
     
              
               
               
      
     
          <div>
            {flag === true?
            <div className='container'> 
            <form className='form' onSubmit={handleSubmit} >
             <div className='left' >
             <div className="mb-3">
                  <label className="form-label">
                    Student Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername1"
                    aria-describedby="usernameHelp"
                    name='studentname'
                     onChange={onChange}
                    required
                    
                  />
                  
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Roll no:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername1"
                    aria-describedby="usernameHelp"
                    name='rollno'
                    placeholder=''
                    value={credentials.rollno}
                    onChange={onChange}
                    required
                    
                  />
                  
                </div>
      
                
             </div>
             <div className='right' >

            <div className="mb-3">
              <label className="form-label">
                Enter Mid Sem no:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="usernameHelp"
                name='midsemno'
                value={credentials.midsemno}
                onChange={onChange}
                
               
                required
              />
              
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Enter End Sem no:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name='endsemno'
               value={credentials.endsemno}
               onChange={onChange}     
               required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Enter Practical no:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name='practicalno'
                value={credentials.practicalno}
                onChange={onChange}
                required
               
              />
            </div>
            <button type="submit" className="btns mb-3">
              Submit
            </button>
             </div>
              
            
            
            
          </form>
          </div>
              :<div>
           {render()}
            </div>
            }
          </div>
        
              
        
           


  )
}
