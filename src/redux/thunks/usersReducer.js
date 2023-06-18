import {usersAPI} from "./api";

const initialState = {
    users: [],
    isFetching: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.value
            }
        }
        case SET_NEW_USER_NAME: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, name: action.name} : u)
            }
        }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setNewUserName = (id, name) => ({type: SET_NEW_USER_NAME, id, name})
export const toggleIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, value})

export const getUsers = () => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))

        const data = await usersAPI.getUsers()

        dispatch(setUsers(data))
        dispatch(toggleIsFetching(false))
    } catch (e) {
        alert('something went wrong')
    }
}

export const updateUserName = (id, name) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))

        const data = await usersAPI.updateUserName(id, name)

        dispatch(setNewUserName(data.data.id, data.data.name))
        dispatch(toggleIsFetching(false))
    } catch (e) {
        alert('something went wrong')
    }
}

const SET_USERS = 'users/SET_USERS'
const SET_NEW_USER_NAME = 'users/SET_NEW_USER_NAME'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'