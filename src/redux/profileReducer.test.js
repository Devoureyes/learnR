import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, post: '1', likeCount: 0},
        {id: 2, post: '2', likeCount: 0},
    ]
};

it('new post should be added',() => {
    // 1. test data
    let action = addPost('test')
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].id).toBe(3)
    expect(newState.posts[2].post).toBe('test')
    expect(newState.posts[2].likeCount).toBe(0)
})
it('new post should be deleted',() => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(1)
})
