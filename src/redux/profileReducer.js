import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
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
                posts: [...state.posts, {id: state.posts.length + 1, post: action.newPostBody, likeCount: 0}],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }
        case 'SET_USER_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.payload
                }
            }
        }
        default:
            return state;
    }
};
export const addPost = newPostBody => ({type: ADD_POST, newPostBody});
export const deletePost = id => ({type: DELETE_POST, id});
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
        if (r.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;