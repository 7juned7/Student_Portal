
import './screens/css/Home.css'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './screens/css/Home.css'

import Home from './screens/Home';
import Admin from './screens/Admin';

import StudentData from './components/StudentData';

function App() {
  return (
   <div className='home'>
    <Router>
      <div>
      <Routes>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path="/" element={<Admin/>}/>
     
     
      <Route exact path='/studentData' element={<StudentData/>}/>
      </Routes>
        
      </div>
    </Router>
    
   </div>
  );
}

export default App;
