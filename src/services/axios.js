import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPosts() {
    return apiClient.get("posts");
  },
  getUsers() {
    return apiClient.get("users");
  },

  getUser(userId) {
    return apiClient.get(`users/${userId}`);
  },
  getUserPost(userId) {
    return apiClient.get(`posts?userId=${userId}`);
  },
  registerPost(){
    return apiClient.post("posts")
  }
  
};
