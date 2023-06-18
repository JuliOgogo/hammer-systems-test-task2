import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const usersAPI = {
    getUsers() {
        return instance.get('users').then(res => {
            return res.data
        })
    },
    updateUserName(id, name) {
        return instance.put(`users/${id}`, {name})
    },
    updateUserUsername(id, username) {
        return instance.put(`users/${id}`, {username})
    },
    updateUserEmail(id, email) {
        return instance.put(`users/${id}`, {email})
    },
    updateUserPhone(id, phone) {
        return instance.put(`users/${id}`, {phone})
    }
}