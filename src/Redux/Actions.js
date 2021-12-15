import * as types from './ActionType'
import axios from 'axios'

const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users
})
export default getUsers;

const userdeleted=()=>({
    type:types.DELETE_USER
})

const useradded=()=>({
    type:types.ADD_USER,

})

const useredit=(user)=>({
    type:types.EDIT_USER,
    payload:user

})

const userupdated=()=>({
    type:types.UPDATED_USER,
})

export const loadUsers=()=>{
    return function (dispatch) {
    axios
    .get(`${process.env.REACT_APP_API}`)
    .then((res)=>{
        //console.log(res)
        dispatch(getUsers(res.data))
    })
    .catch((error)=>{ console.log(error) })
    }
}
export const deleteUser=(id)=>{
    return function (dispatch) {
    axios
    .delete(`${process.env.REACT_APP_API}/${id}`)
    .then((res)=>{
        //console.log(res)
        dispatch(userdeleted())
        dispatch(loadUsers())
    })
    .catch((error)=>{ console.log(error) })
    }
}

export const addUser=(adddata)=>{
    return function (dispatch) {
    axios
    .post(`${process.env.REACT_APP_API}`,adddata)
    .then((res)=>{
        //console.log(res)
        dispatch(useradded())
        dispatch(loadUsers())
    })
    .catch((error)=>{ console.log(error) })
    }
}

export const editUser=(id)=>{
    return function (dispatch) {
    axios
    .get(`${process.env.REACT_APP_API}/${id}`)
    .then((res)=>{
        //console.log(res)
        dispatch(useredit(res.data))
        //dispatch(loadUsers())
    })
    .catch((error)=>{ console.log(error) })
    }
}

export const updateUser=(user,id)=>{
    return function (dispatch) {
    axios
    .put(`${process.env.REACT_APP_API}/${id}`,user)
    .then((res)=>{
        //console.log(res)
        dispatch(userupdated())
        //dispatch(loadUsers())
    })
    .catch((error)=>{ console.log(error) })
    }
}