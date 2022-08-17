export interface UsersState  {
    userInfo: {user:{email: string, id: number}}
    loading: boolean;
    isAuth: boolean;
    error: boolean;
}


export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USERS_LOGOUT = 'FETCH_USERS_LOGOUT',    
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
    payload:any
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
}

interface FetchUsersLogOutAction {
    type: UserActionTypes.FETCH_USERS_LOGOUT
}

export type UsersAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersLogOutAction
