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
    }
}