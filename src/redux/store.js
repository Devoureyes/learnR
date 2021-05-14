import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postText: '',
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
            ],
            newMessageBody: '',
        },
        sideBar: {},
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

    dispatch(action) { // {type:'ADD-POST',message:'lol'}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubcriber(this._state)
    }
}

export default store;