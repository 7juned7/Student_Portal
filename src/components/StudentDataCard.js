import React,{useState,useEffect} from 'react'
import '../screens/css/Home.css'
import { useNavigate } from 'react-router-dom';


export default function StudentDataCard(props) {
const [show,setshow]=useState(false)
    let Navigate = useNavigate();
    const handleClick=()=>{
     
     localStorage.setItem("studentName",props.name)
     localStorage.setItem("studentRollno",props.rollno)
 
     Navigate("/studentData")
     

     

    }
    const handleDelete = async (e)=>{
      const id = e.target.id;
      console.log(id)
      
     
      e.preventDefault();
      const response = await fetch("http://localhost:4000/api/deleteStudentMarksData",{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body: JSON.stringify({_id:id})
      }
      
      );
      const json = await response.json()
      if(!json.success){
        console.log(json)
        console.log("error in sending student nos ")
      }
      if(json.success){
       alert("deteted")
       console.log("yo")
        
      }
      
    }
    useEffect(()=>{
      
      if(window.innerWidth<530){
        setshow(true)
      }
       
     
      
    },[])
  return (
    <div>
          <div className="student_card" id ={props.id}>
    <div className="card_name">
      <div className="name">{show&&("Name:")} {props.name}</div>
      <div className="rollno">{show&&("Rollno:")}{props.rollno}</div>
    
    </div>
    <div className="student_marks">
        <div className="midsem  ">{show&&("midsem:")} {props.midsem}</div>
        <div className="endsem">{show&&("endsem:")}{props.endsem}</div>
        <div className="practical">{show&&("Practical:")}{props.practical}</div>
    </div>
    <div className="edit_delete">

    <div className='btns' id={props.id} onClick={handleDelete}>
     Delete
    </div>
    <div className="btns" onClick={handleClick}>
     Edit
    </div>
    </div>
  
</div>
    </div>
  )
}
