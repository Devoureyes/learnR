const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postText: 'Type something',
            posts: [
                {id: 1, post: 'Now look at this', likeCount: 12},
                {id: 2, post: 'Today, i\'m went to the park and ate a hamburger', likeCount: 12},
                {id: 3, post: 'Hello! It\'s my first post', likeCount: 12},
            ]
        },
        messagesPage: {
            names: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Andy'},
                {id: 3, name: 'Andrew_bot'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'lol'},
                {id: 3, message: 'Yo'},
            ]
        }
    },
    _callSubcriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer
    },

    _addPost() {
        let newPost = {
            id: 4,
            post: this._state.profilePage.postText,
            likeCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.postText = ''
        this._callSubcriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.postText = newText
        this._callSubcriber(this._state);
    },
    dispatch(action) { // {type:'ADD-POST',message:'lol'}
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.text)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default store;