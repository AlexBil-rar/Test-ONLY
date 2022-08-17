import {UsersAction, UsersState, UserActionTypes} from "../../types/User";

export const initialState: UsersState = {
    userInfo: {user:{email: "", id: 0}},
    loading: false,
    isAuth: false,
    error: false
}

export const userReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: true}
        case UserActionTypes.FETCH_USERS:
            return {error: false, userInfo: action.payload, isAuth: true, loading: false}
        case UserActionTypes.FETCH_USERS_LOGOUT:
            localStorage.removeItem('token')
            return {...state,  isAuth: false}
        default:
            return state
    }
}
export const logout = () => ({type: UserActionTypes.FETCH_USERS_LOGOUT})