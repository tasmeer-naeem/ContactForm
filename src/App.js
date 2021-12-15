//import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './Pages/Home' ;
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import ViewUser from './Pages/ViewUser';
import Header from './Pages/Header';
import About from './Pages/About'
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <ToastContainer position="top-center"/>
    <Routes>
    <Route exact path="/" element={<Home/>} ></Route>
    <Route exact path="/addUser" element={<AddUser/>} ></Route>
    <Route exact path="/editUser/:id" element={<EditUser/>} ></Route>
    <Route exact path="/viewUser/:id" element={<ViewUser/>} ></Route>
    <Route exact path="/about" element={<About/>} ></Route>
    <Route exact path="/search" element={<Search/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;

//switch is replaced by routes
//component is replaced by element
//{} is replaced by {<../>}
//useHistory is replaced by useNavigate()