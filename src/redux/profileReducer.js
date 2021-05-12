const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.postText,
                likeCount: 0,
            }
            state.posts.push(newPost)
            state.postText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.postText = action.text
            return state;
        default:
            return state;
    }
}
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer;