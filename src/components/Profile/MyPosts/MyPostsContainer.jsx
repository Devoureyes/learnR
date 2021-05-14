import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer_old = () => {
    return (<StoreContext.Consumer>
        {(store) => {
        let state = store.getState()

        let addPost = () => {
            store.dispatch(addPostCreator());
        }

        let onPostChange = (text) => {
            let action = updateNewPostTextCreator(text);
            store.dispatch(action);
        }
        return (
            <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                postText={state.profilePage.postText}
            />)
    }
    }
    </StoreContext.Consumer>)
}*/

let mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        postText:state.profilePage.postText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(text)=>{dispatch(updateNewPostTextCreator(text))},
        addPost:()=>{dispatch(addPostCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
