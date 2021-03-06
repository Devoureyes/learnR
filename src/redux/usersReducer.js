import { userAPI } from "../api/api";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'

export const follow = userId => ({ type: FOLLOW, userId })
export const unfollow = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setCurrentPages = currentPages => ({ type: SET_CURRENT_PAGES, currentPages })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const setPageSize = pageSize => ({ type: SET_PAGE_SIZE, pageSize })

let initialState = {
    users: [],
    pageSize: 32,
    totalUsersCount: 0,
    currentPage: 1,
    currentPages: 0,
    isFetching: true,
    followingInProgress: [18746],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount }
        case SET_CURRENT_PAGES:
            return {...state, currentPages: action.currentPages }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        case SET_PAGE_SIZE:
            return {...state,
                pageSize: action.pageSize
            }
        default:
            return state
    }
}




export const requestUsers = ({currentPage = 1, pageSize = 25}) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize).then(r => {
        dispatch(toggleIsFetching(false))
        dispatch(setCurrentPage(currentPage))
        dispatch(setUsers(r.data.items))
        dispatch(setTotalUsersCount(r.data.totalCount))
    })
}
export default usersReducer;