
import SignIn from './components/SignIn/SignIn';
import Signup from './components/SignUp/SignUp';
import {Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/signIn" element={<SignIn/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
    </div>
  );
}


export default App;
