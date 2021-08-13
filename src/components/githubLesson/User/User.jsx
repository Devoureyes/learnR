import React from 'react';
import s from '../git.module.css';
import {connect} from 'react-redux';
import {setFollowersRequest} from './user_actions';
import {getFollowers} from './user_reducer';


const User = props => {
    const {
        user: {
            avatar_url,
            bio,
            company,
            blog,
            followers,
            location,
            login,
            name,
            public_repos,
            url,
        },
        followersUser
    } = props;


    return <div className={s.person}>
        <div className={s.bio}>
            <div className={s.img}><img src={avatar_url} alt="avatar"/></div>
            <div className={s.info}>
                <p>Login: <span>{login}</span></p>
                <p>Name: <span>{name}</span></p>
                <p>Location: <span>{location}</span></p>
                <p>Blog: <span>{blog}</span></p>
                <p>Company: <span>{company}</span></p>
                <p>Bio: <span>{bio}</span></p>
                <p>url: <a href={url}>{url}</a></p>
                <p>Followers: <span>{followers}</span></p>
                <p>Public repos: <span>{public_repos}</span></p>
            </div>
            {followersUser.map(el => <div key={el.id}>{el.login}</div>)}
        </div>

    </div>;
};

const mstp = state => ({
    followersUser: getFollowers(state)
})


export default connect(mstp, {setFollowersRequest})(User);