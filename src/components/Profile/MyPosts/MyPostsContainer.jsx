import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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
