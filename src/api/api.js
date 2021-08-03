import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'ff561da7-3ea5-4ca0-b674-21db66fafbf3'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r => {return r.data})
}
export const followAPI = (id) => {
    return instance.post('follow/' + id, {}).then(r => {if (r.data.resultCode === 0) return true})
}
export const unFollowAPI = (id) => {
    return instance.delete('follow/'+id).then(r => {if (r.data.resultCode === 0) return true})
}
export const AuthAPI = () => {
    return instance.get('auth/me').then(r => {return r.data})
}
export const profileAPI = (userId) => {
    return instance.get('profile/'+userId).then(r => {return r.data})
}