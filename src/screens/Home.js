import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Info from "../components/Info"


import './css/Home.css'

import StudentDataCard from '../components/StudentDataCard'

export default function Home() {
  const [show,setshow]=useState(true)
  console.log(window.innerWidth)
  const username = localStorage.getItem("username")
  localStorage.removeItem("marksId")
  localStorage.removeItem("studentRollno");
  localStorage.removeItem("studentName");
  

  const [searchRollno,setSearchRollno] = useState('');
  const [studentMarksData,setstudentMarksData] = useState([])

  
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
    if(window.innerWidth<530){
      setshow(false)
    }
     
    console.log(localStorage)
    
  },[])
  return (<div className='body'>
      <div><Navbar/></div>
      
      <div className='home_body' >
      <Link  className="add_student btns" to="/studentData">
           Add Student
      </Link>
      <input type="search" name="" id="" placeholder='search student by rollno' value={searchRollno} onChange={(e)=>{setSearchRollno(e.target.value)}} className='search_box' />
      
      <div className='student_data_container'>

      
       <div className="info">
        {show&&(<Info/>)}
       </div>
       
        {
         studentMarksData!==[]?
         studentMarksData.filter(
          (filterData) => (filterData.username===username&&((filterData.rollno.toLowerCase().includes(searchRollno))))
          )
          .map(data=>{
            return(
              <div key={data._id}>
            <StudentDataCard
            id = {data._id}
            name = {data.studentname}
            rollno = {data.rollno}
            midsem = {data.midsemno}
            endsem = {data.endsemno}
            practical = {data.practicalno}
            >
            </StudentDataCard>
            
              </div>
            )
          })
         :"hi"
      
        }
      
      </div>
      </div>
     
      
      
  </div>
  )
}

