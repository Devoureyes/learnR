const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        /*{id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: true, fullName: 'Name1', status:'Cool1', location: {city:'Moscow1',country:'Russia1'}},
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: false, fullName: 'Name2', status:'Cool2', location: {city:'Moscow2',country:'Russia2'}},
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: false, fullName: 'Name3', status:'Cool3', location: {city:'Moscow3',country:'Russia3'}},
        {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: true, fullName: 'Name4', status:'Cool4', location: {city:'Moscow4',country:'Russia4'}}*/
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return  {
                ...state,
                    users:state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: true}}
                    return u
                    })
            }
        case UNFOLLOW:
            return  {
                ...state,
                    users:state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: false}}
                    return u
                    })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW,userId})
export const setUsersAC = (users) => ({type: SET_USERS,users})

export default usersReducer;