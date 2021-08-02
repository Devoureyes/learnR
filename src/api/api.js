import axios from "axios";
import API_KEY from "../components/Constants";

const getUsers = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&take=${pageSize}`, {
        withCredentials: true,
        headers: {'API-KEY': API_KEY}
    })
}
export default getUsers