const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const MORE = 'MORE'



const usersReducer = (state = {users: []}, action) => {
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
        case MORE:
            return {...state,page:1,count:5}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW,userId})
export const setUsersAC = (users) => ({type: SET_USERS,users})

export default usersReducer;