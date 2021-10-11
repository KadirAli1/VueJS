import axios from "axios";

const apiClient = axios.create({
withCredentials: false,
headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
},
})

export default {
    getPosts(){
        return apiClient.get("https://jsonplaceholder.typicode.com/posts")
    },
    getUsers(){
        return apiClient.get("https://jsonplaceholder.typicode.com/users")
    }
}