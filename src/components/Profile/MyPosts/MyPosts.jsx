import s from "./MyPosts.module.css";
import Post from "./Post/post";
import React from "react";
import {Field,reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators';
import {Textarea} from '../../commons/formControls/FormControls';

const maxLength10 = maxLengthCreator(10)

const MyPosts = (p) => {

    const {
        posts,
        addPost,
    } = p

    let postElements = posts.map((el,i) => <Post key={i} post={el}/>)

    const AddPost = values => {
        addPost(values.postMessageBody)
    }
    return (
        <div className={s.posts}>
            <PostReduxForm onSubmit={AddPost} />
            <div className={s.posts_scroll}>{postElements}</div>
        </div>
    )
}

const AddPostForm = props => {
    return <form onSubmit={props.handleSubmit} className={s.add}>
        <Field component={Textarea} name={'postMessageBody'} placeholder={'Tell about something...'} validate={[required,maxLength10]}/>
        <button className={`myButton ${s.but}`}>Add new post
        </button>
    </form>
}

const PostReduxForm = reduxForm({form:'ProfileNewPostForm'})(AddPostForm)

export default MyPosts;
