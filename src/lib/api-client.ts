import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer 3|YRvybQBCbTOLhAajZ0gDg45SG4TocecqzwYbuBUr3aedc841"
    },
})

export default apiClient;