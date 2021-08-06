import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainer extends React.Component {
    render() {
        return <MyPosts posts={this.props.posts} addPost={this.props.addPost}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
    }
}

export default connect(mapStateToProps, {addPost})(MyPostsContainer);;
