import { actionType } from "../../constants/allActions"
import axios from 'axios'
import {toast} from 'react-toastify'
import { message } from "../../constants/allToastMessages"

export const createUser = (user) => {
    const { name, email, password } = user
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3003/register', {
                name,
                email,
                password
            })
            if (data) {
                toast.success(message.USER_CREATED)
                dispatch({
                    type: actionType.CREATE_USER,
                    payload: data
                })
                dispatch(fetchAllUsers())
            }

        } catch (error) {
            console.error(error, "error")
        }
    }
}

export const fetchAllUsers = () => {
    return async (dispatch) => {
        try {

            const { data } = await axios.get('http://localhost:3003/users')
            if (data.length > 0) {
                dispatch({
                    type: actionType.FETCH_USERS_DATA,
                    payload: data
                })
            }

        } catch (error) {
            console.error(error, "error")
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {

            const { data } = await axios.delete(`http://localhost:3003/delete?id=${id}`)
            if (data) {
                toast.success(message.USER_DELETED)
                dispatch({
                    type: actionType.DELETE_USER,
                    payload: data
                })
                dispatch(fetchAllUsers())
            }

        } catch (error) {
            console.error(error, "error")
        }    
    }
}

export const updateUser = (id,dataValue) => {

    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3003/update?id=${id}`,{
                name:dataValue.name,
                email:dataValue.email
            })
            if (data) {
                toast.success(message.USER_UPDATED)
                dispatch({
                    type: actionType.UPDATE_USER,
                    payload: data
                })
            }

        } catch (error) {
            console.error(error, "error")
        }    
    }
}