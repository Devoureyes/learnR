import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


const profileReducer = (state = {profile: null,id: 0,status: ''}, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: state.postText, likeCount: 0}],
                postText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                postText: action.text
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export const addPostCreator = () => ({type: ADD_POST})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = status => ({type: SET_USER_STATUS, status})
const updateUserStatus = status => ({type: SET_USER_STATUS, status})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export const getUserProfile = id => (dispatch) => {
    profileAPI.getProfile(id).then(data => dispatch(setUserProfile(data)))
}
export const getUserStatus = id => (dispatch) => {
    profileAPI.getStatus(id).then(data => dispatch(setUserStatus('wewes')))
}
export const updateStatus = status => (dispatch) => {
    profileAPI.updateStatus(status).then(data => dispatch(updateUserStatus(data)))
}

export default profileReducer;