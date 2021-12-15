import React from 'react'
import { useParams } from 'react-router'
import { useState , useEffect } from 'react'
import firebasedb from './Firebase'
import { Card , Button} from '@material-ui/core'
import { useNavigate } from 'react-router'

const ViewUser = () => {
    const [dataa, setdataa] = useState({})
    const {id} = useParams()
    const navigate = useNavigate();

useEffect(() => {
    if(id){
        firebasedb
        .child(`Contacts/${id}`)
        .get()
        .then((snapshot)=>{
            if(snapshot.val()){
                setdataa({...snapshot.val()})
            }else{
                setdataa({})
            }
        })
    }
    return () => {
        setdataa({})
    }
}, [id])
//console.log(dataa)
 let curdate=new Date();
    return (
        <div style={{backgroundColor:"darkgrey" , width:"100%" , height:"39em" }} >
        <h1 style={{textShadow:"6px 6px 8px white"}}>USER DETAILS</h1>
        <Card style={{boxShadow:"15px 15px 15px black" , marginTop:"80px" , marginLeft:"380px" , width:"40rem" , paddingTop:"18px" , textAlign:"left" , paddingLeft:"50px" }} >   
        <h3>ID : {id} </h3><br/><br/>
        <h3>NAME : {dataa.name} </h3><br/><br/>
         <h3>EMAIL : {dataa.email} </h3><br/><br/>
         <h3>ADDRESS : {dataa.address}</h3><br/><br/>
         <h3>CONTACT :  {dataa.contact}</h3><br/><br/>
         <h3>{curdate.toString() }</h3><br/><br/>
        </Card>
        <Button  color="inherit" variant="contained"  style={{width:"12rem",marginLeft:"5px",marginTop:"60px"}} onClick={()=>navigate("/")}  >GO BACK</Button>
        </div>
    )
}

export default ViewUser
