import React from 'react'
import '../screens/css/Home.css'
function Info() {
  return (
    <div>
        <div>
          <div className="student_info">
    <div className="card_name">
      <div className="name">Student Name</div>
      <div className="rollno"> Roll No</div>
    
    </div>
    <div className="student_marks">
        <div className="midsem">Midsem </div>
        <div className="endsem">Endsem </div>
        <div className="practical">Practical </div>
    </div>
    <div className="edit_delete">

    <div className='btns opacity ' aria-hidden="true">
      Delete
    </div>
    <div className="btns opacity" aria-hidden="true" >
     Edit
    </div>
    </div>
  
</div>
    </div>
    </div>
  )
}

export default Info