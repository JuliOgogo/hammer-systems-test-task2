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
        case SET_NEW_USER_USERNAME: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, username: action.username} : u)
            }
        }
        case SET_NEW_USER_EMAIL: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, email: action.email} : u)
            }
        }
        case SET_NEW_USER_PHONE: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, phone: action.phone} : u)
            }
        }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setNewUserName = (id, name) => ({type: SET_NEW_USER_NAME, id, name})
export const setNewUserUserName = (id, username) => ({type: SET_NEW_USER_USERNAME, id, username})
export const setNewUserEmail = (id, email) => ({type: SET_NEW_USER_EMAIL, id, email})
export const setNewUserPhone = (id, phone) => ({type: SET_NEW_USER_PHONE, id, phone})
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

export const updateUser = (id, name, username, email, phone) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))

        const nameData = await usersAPI.updateUserName(id, name)
        const usernameData = await usersAPI.updateUserUsername(id, username)
        const emailData = await usersAPI.updateUserEmail(id, email)
        const phoneData = await usersAPI.updateUserPhone(id, phone)

        dispatch(setNewUserName(nameData.data.id, nameData.data.name))
        dispatch(setNewUserUserName(usernameData.data.id, usernameData.data.username))
        dispatch(setNewUserEmail(emailData.data.id, emailData.data.email))
        dispatch(setNewUserPhone(phoneData.data.id, phoneData.data.phone))
        dispatch(toggleIsFetching(false))
    } catch (e) {
        alert('something went wrong')
    }
}

const SET_USERS = 'users/SET_USERS'
const SET_NEW_USER_NAME = 'users/SET_NEW_USER_NAME'
const SET_NEW_USER_USERNAME = 'users/SET_NEW_USER_USERNAME'
const SET_NEW_USER_EMAIL = 'users/SET_NEW_USER_EMAIL'
const SET_NEW_USER_PHONE = 'users/SET_NEW_USER_PHONE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'