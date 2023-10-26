import { actionType } from "../../constants/allActions"
import axios from 'axios'

export const createUser = (user) => {
    const {name,email,password} = user
    return async (dispatch) => {
        try {
            const {data} = await axios.post('http://localhost:3003/register',{
                name,
                email,
                password
            })
            if(data.length > 0) {
                dispatch({
                    type:actionType.CREATE_USER,
                    payload:data
                })
            }

        } catch (error) {
            console.error(error,"error")
        }
    }
}