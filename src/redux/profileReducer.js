const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postText: '',
    posts: [
        {id: 1, post: 'Now look at this', likeCount: 12},
        {id: 2, post: 'Today, i\'m went to the park and ate a hamburger', likeCount: 12},
        {id: 3, post: 'Hello! It\'s my first post', likeCount: 12},
    ]
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }

}
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer;