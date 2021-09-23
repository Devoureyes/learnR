/*
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
 import {UserType} from "../types/types";

 const defaultState = {
     users: [] as Array<UserType>,
     pageSize: 32,
     totalUsersCount: 0,
     currentPage: 1,
     currentPages: 0,
     isFetching: true,
     followingInProgress: [18746] as Array<number>,
 };

 type defaultStateType = typeof defaultState

 const userReducer = handleActions(
     {
         [follow]: (state: any, action: any) => ({
             ...state,
             users: state.users.map(user => {
                 if (user.id === action.payload) {
                     return {...user, followed: true};
                 }
                 return user;
             })
         }),
         [unfollow]: (state: any, action: any) => ({
             ...state,
             users: state.users.map(user => {
                 if (user.id === action.payload) {
                     return {...user, followed: false};
                 }
                 return user;
             })
         }),
         [setUsers]: (state: any, action: any) => ({
             ...state,
             users: action.payload
         }),
         [setCurrentPage]: (state: any, action: any) => ({
             ...state,
             currentPage: action.payload
         }),
         [setCurrentPages]: (state: any, action: any) => ({
             ...state,
             currentPages: action.payload
         }),
         [toggleIsFetching]: (state: any, action: any) => ({
             ...state,
             isFetching: action.payload
         }),
         [toggleIsFollowingProgress]: (state: any, action: any) => ({
             ...state,
             followingInProgress: action.payload.isFetching ?
                 [...state.followingInProgress, action.payload.userId] :
                 [...state.followingInProgress.filter(id => id !== action.payload.userId)]
         }),
         [setTotalUsersCount]: (state: any, action: any) => ({
             ...state,
             totalUsersCount: action.payload
         }),
         [setPageSize]: (state: any, action: any) => ({
             ...state,
             pageSize: action.payload
         }),
         [setUsersRequest]: (state: any, action: any) => ({
             ...state,
             currentPage: action.payload.currentPage,
             pageSize: action.payload.pageSize,
         })
     }, defaultState);


 export const getUsers = (state: any) => state.usersPage.users
 export const getPageSize = (state: any) => state.usersPage.pageSize
 export const getTotalUsersCount = (state: any) => state.usersPage.totalUsersCount
 export const getCurrentPage = (state: any) => state.usersPage.currentPage
 export const getCurrentPages = (state: any) => state.usersPage.currentPages
 export const getIsFetching = (state: any) => state.usersPage.isFetching
 export const getFollowingInProgress = (state: any) => state.usersPage.followingInProgress


 export default userReducer;
*/