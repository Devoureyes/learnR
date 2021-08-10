import {profileAPI} from '../api/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    status: undefined,
    posts: [
        {id: 1, post: '1', likeCount: 0},
        {id: 2, post: '2', likeCount: 0},
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length+1, post: action.newPostBody, likeCount: 0}],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};
export const addPost = newPostBody => ({type: ADD_POST, newPostBody});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = id => (dispatch) => {
    profileAPI.getProfile(id).then(data => dispatch(setUserProfile(data)));
};
export const getUserStatus = id => (dispatch) => {
    profileAPI.getStatus(id).then(r => dispatch(setStatus(r.data)));
};
export const updateStatus = status => (dispatch) => {
    profileAPI.updateStatus(status).then(r => {
        if (r.data.resultCode === 0) {dispatch(setStatus(status));}
    });
};

export default profileReducer;