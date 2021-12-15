//import { snapshotEqual } from '@firebase/firestore/dist/index.node.cjs'
import React from 'react'
import { useEffect , useState } from 'react'
import { useLocation } from 'react-router'
import firebasedb from './Firebase'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useNavigate} from 'react-router-dom'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      //marginRight:theme.spacing(2)
    },
  }));

const Search = () => {
    const classes = useStyles();
    const [dataa, setsearchdata] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    const usequery=()=>{
        return new URLSearchParams(location.search)
    }

    let query = usequery()
    let searchVar = query.get("name")
    //console.log(search)

    useEffect(() => {
       searchDatafunc()
    }, [searchVar])

    const searchDatafunc=()=>{
        firebasedb.child("Contacts").orderByChild("name").equalTo(searchVar).on("value",(snapshot)=>{
            if(snapshot.val()){
                const datavar=snapshot.val()
                setsearchdata(datavar)
            }
        })
    }
    return (
        <div>
        <div style={{backgroundColor:"Menu" , height:"92vh" ,  paddingTop:"3rem"}} >
      {Object.keys(dataa).length  === 0 ? 
      ( <h2> No search found with this name :  {query.get("name")} </h2> ) 
      : 
      ( <TableContainer component={Paper}  style={{width:"70%",marginLeft:"3rem"  }}  >
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">ID</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Contact</StyledTableCell>
          <StyledTableCell align="center"   >Address</StyledTableCell>
          <StyledTableCell align="center"   >Status</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {Object.keys(dataa).map((idd,index) => (
            <StyledTableRow key={idd}>
              <StyledTableCell align="center" component="th" scope="row"> {index + 1}</StyledTableCell>
              <StyledTableCell align="center">{dataa[idd].name}</StyledTableCell>
              <StyledTableCell align="center">{dataa[idd].email}</StyledTableCell>
              <StyledTableCell align="center">{dataa[idd].contact}</StyledTableCell>
              <StyledTableCell align="center">{dataa[idd].address}</StyledTableCell>
              <StyledTableCell align="center">{dataa[idd].status}</StyledTableCell>
            </StyledTableRow>
          ))} 
          </TableBody>
    </Table>
  </TableContainer> )  }       
  <Button  color="inherit" variant="contained"  style={{width:"12rem",marginLeft:"5px" , marginTop:"2%" }} onClick={()=>navigate("/")}  >GO BACK</Button>
      </div> 
      </div>
    )
}

export default Search;
