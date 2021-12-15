import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import React , {useEffect , useState} from 'react'
import {Link , useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import "./Header.css";

const Header=()=>{

    const [activeTab, setactiveTab] = useState("")
    const [search, setsearch] = useState("")
    const location=useLocation();
    const navigate = useNavigate();

useEffect(() => {
   if(location.pathname === "/"){
    setactiveTab("Home")
   }
   else if(location.pathname === "/adduser"){
    setactiveTab("AddContact")
   }
   else if(location.pathname === "/about"){
    setactiveTab("About")
   }
}, [location])

const  searchsubmit=(e)=>{
        e.preventDefault()
        navigate(`/search?name=${search}`);
        setsearch("")
}
    return(
        <div style={{display:"flex" , backgroundColor:"Menu"   }}  className=' container-fluid'  >
        <h2 style={{paddingLeft:"3rem"}}>CONTACT FORM</h2>
        <div style={{display:"flex",flexDirection:"row" , alignItems:"center" , paddingLeft:"30rem" }}>
        <Link to="/" >
        <Button className={ `${activeTab === "Home" ? "active" : "" }`} onClick={()=>setactiveTab("Home")}>Home</Button>
        </Link>
        <Link to="/adduser"  style={{marginLeft:"3rem"}}>
        <Button className={ `${activeTab === "AddContact" ? "active" : "" }`} onClick={()=>setactiveTab("AddContact")}>Add Contact</Button>
        </Link>
        <Link to="/about"  style={{marginLeft:"3rem"}}>
        <Button className={ `${activeTab === "About" ? "active" : "" }`} onClick={()=>setactiveTab("About")}>About</Button>
        </Link>
        <form style={{marginLeft:"4rem" }} onSubmit={searchsubmit} >
        <TextField type="text" placeholder='Search Name' value={search} onChange={(e)=>setsearch(e.target.value)}  />
        </form>
        </div>
      </div>
    )
}

export default Header;