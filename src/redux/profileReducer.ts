import {profileAPI} from '../api/api';
import {PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_USER_PHOTO_SUCCESS = 'SET_USER_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'
const SAVE_PROFILE_FAILURE = 'SAVE_PROFILE_FAILURE'

let initialState = {
    profile: null as ProfileType | null,
    status: '',
    posts: [
        {id: 1, post: '1', likeCount: 0},
        {id: 2, post: '2', likeCount: 0},
    ] as Array<PostType>,
    error: ''
};

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
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
        case SET_USER_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.payload
                } as ProfileType
            }
        }
        case SAVE_PROFILE_SUCCESS: {
            return {...state, profile: action.payload};
        }
        case SAVE_PROFILE_FAILURE: {
            return {...state, error: action.payload}
        }
        default:
            return state;
    }
};

type addPostType = {
    type: typeof ADD_POST,
    newPostBody: string
}
type deletePostType = {
    type: typeof DELETE_POST
    id: number
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type setStatusType = {
    type: typeof SET_STATUS
    status: string
}

export const addPost = (newPostBody:string):addPostType => ({type: ADD_POST, newPostBody});
export const deletePost = (id:number):deletePostType => ({type: DELETE_POST, id});
const setUserProfile = (profile:ProfileType):setUserProfileType => ({type: SET_USER_PROFILE, profile});
const setStatus = (status:string):setStatusType => ({type: SET_STATUS, status});

export const getUserProfile = (id: number) => (dispatch:any) => {
    profileAPI.getProfile(id).then(data => dispatch(setUserProfile(data)));
};
export const getUserStatus = (id: number) => (dispatch:any) => {
    profileAPI.getStatus(id).then(r => dispatch(setStatus(r.data)));
};
export const updateStatus = (status:string) => (dispatch:any) => {
    profileAPI.updateStatus(status).then(r => {
        if (r.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;