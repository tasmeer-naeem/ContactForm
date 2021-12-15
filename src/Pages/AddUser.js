import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import { useDispatch } from 'react-redux';
//import { addUser } from '../Redux/Actions';
//import {useHistory} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
//import Firebase from './Firebase';
import firebasedb from './Firebase'
//import { Toast } from 'react-toastify/dist/components';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:50,
    '& > *': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
}));


const AddUser = () => {
    const [state, setstate] = useState({name:"",email:"",contact:"",address:"",status:"" })
   // const [error, seterror] = useState()
    const classes = useStyles();
    //const dispatch = useDispatch()
    //const history = useHistory()
    const navigate=useNavigate()
    
    

    const {name,email,contact,address,status } = state

const handleInput=(e)=>{
        const {name,value}=e.target;
        setstate({...state,[name]:value})
        //console.log()
}

const submitform=(e)=>{
    e.preventDefault()
    if(!name || !email || !contact || !address || !status){
        //seterror("Please fill input fields")
        toast.error("Please fill input fields")
    }else{
        firebasedb.child("Contacts").push(state,(err)=>{
            if(err){
                toast.error(err)
            }
            else{
                toast.success("Contact added successfully")
            }
        })
        //dispatch(addUser(state))
        navigate("/")
        //seterror("")
    }
}
         // {error && <h3 style={{color:"red" }}>{error}</h3>}  
    return (
        <div  style={{backgroundColor:"Menu" , width:"100%" }} >
        <h1 style={{textShadow:"6px 6px 8px white"}}>ADD USER DATA</h1>
       
        <form className={classes.root} noValidate autoComplete="off" style={{alignItems:"center" , backgroundColor:"white" , boxShadow:"15px 15px 15px black" , marginTop:"7px" , marginLeft:"370px" , width:"40rem" , paddingTop:"18px"}} onSubmit={submitform} > 
        <TextField id="outlined-basic" label="name" variant="outlined" name="name" value={name || ""} type="text"  onChange={handleInput} /><br/>
        <TextField id="outlined-basic" label="email" variant="outlined" name="email" value={email || ""} type="text" onChange={handleInput}/><br/>
        <TextField id="outlined-basic" label="address" variant="outlined" name="address" value={address || ""} type="text" onChange={handleInput}/><br/>
        <TextField id="outlined-basic" label="contact" variant="outlined" name="contact" value={contact || ""} type="text" onChange={handleInput}    /><br/>
        <TextField id="outlined-basic" label="status" variant="outlined" name="status" value={status || ""} type="text" onChange={handleInput}    /><br/>
        <div  style={{ display:"flex" , marginLeft:"16%" , paddingBottom:"22px"}}   >
       <Button variant="contained" color="primary"   type="submit" style={{width:"15rem"}} >SUBMIT</Button>
        <Button  color="inherit" variant="contained"  style={{width:"12rem",marginLeft:"5px"}} onClick={()=>navigate("/")}  >GO BACK</Button>
        </div>
        </form>
        </div>
    )
}

export default AddUser
