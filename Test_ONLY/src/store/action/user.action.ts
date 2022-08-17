import {UsersAction, UserActionTypes} from "../../types/User";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = (email: string, password: string) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.post('http://localhost:5000/login', 
                {
                    email, 
                    password 
                }, 
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }    
                }
            );
                dispatch({type: UserActionTypes.FETCH_USERS, payload: response.data})
                localStorage.setItem('token', response.data.token)
                console.log(response.data)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
