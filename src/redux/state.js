import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        post: postMessage,
        likeCount: 0,
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
};

export default state;