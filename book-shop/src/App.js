import "./App.css";
import { Signup } from "./component/SignUp.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return(

   <div className="container mt-3">
     <div className='row'>
       <div className='col-md-5'>
        <Signup/>
       </div>
       <div className='col-md-7'>
       </div>
     </div>
   </div>
  )
  
  }

export default App;
