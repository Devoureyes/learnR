import {handleActions} from 'redux-actions';
import {
    follow,
    unfollow,
    setPageSize,
    toggleIsFollowingProgress,
    toggleIsFetching,
    setCurrentPage,
    setCurrentPages,
    setUsers,
    setTotalUsersCount,
    setUsersRequest
} from '../actions/usersPageActions';

let defaultState = {
    users: [],
    pageSize: 32,
    totalUsersCount: 0,
    currentPage: 1,
    currentPages: 0,
    isFetching: true,
    followingInProgress: [18746],
};

const userReducer = handleActions(
    {
        [follow]: (state, action) => ({
            ...state,
            users: state.users.map(user => {
                if (user.id === action.payload) {
                    return {...user, followed: true};
                }
                return user;
            })
        }),
        [unfollow]: (state, action) => ({
            ...state,
            users: state.users.map(user => {
                if (user.id === action.payload) {
                    return {...user, followed: false};
                }
                return user;
            })
        }),
        [setUsers]: (state, action) => ({
            ...state,
            users: action.payload
        }),
        [setCurrentPage]: (state, action) => ({
            ...state,
            currentPage: action.payload
        }),
        [setCurrentPages]: (state, action) => ({
            ...state,
            currentPages: action.payload
        }),
        [toggleIsFetching]: (state, action) => ({
            ...state,
            isFetching: action.payload
        }),
        [toggleIsFollowingProgress]: (state, action) => ({
            ...state,
            followingInProgress: action.payload.isFetching ?
                [...state.followingInProgress, action.payload.userId] :
                [...state.followingInProgress.filter(id => id !== action.payload.userId)]
        }),
        [setTotalUsersCount]: (state,action) => ({
           ...state,
            totalUsersCount: action.payload
        }),
        [setPageSize]: (state, action) => ({
            ...state,
            pageSize: action.payload
        }),
        [setUsersRequest]: (state,action) => ({
            ...state,
            currentPage: action.payload.currentPage,
            pageSize: action.payload.pageSize,
        })
    }, defaultState);


export const getUsers = state => state.usersPage.users
export const getPageSize = state => state.usersPage.pageSize
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getCurrentPage = state => state.usersPage.currentPage
export const getCurrentPages = state => state.usersPage.currentPages
export const getIsFetching = state => state.usersPage.isFetching
export const getFollowingInProgress = state => state.usersPage.followingInProgress


export default userReducer;