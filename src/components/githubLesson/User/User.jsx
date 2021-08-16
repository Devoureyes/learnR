import React from 'react';
import s from '../git.module.css';
import {connect} from 'react-redux';
import {setFollowersRequest} from './user_actions';
import {getFollowers, getPage, getPerPage} from './user_reducer';
import Follower from './Follower';
import {getToggleFollowersIsActive} from './user_reducer';
import Loader from '../../todo/Loader';


const User = React.memo(props => {
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
        },
        followersUser,
        setUserRequest,
        toggleFollowersIsActive,
        page,
        per_page,
        setFollowersRequest
    } = props;

    React.useEffect(() => {
        setFollowersRequest({login:login,page:page,per_page:per_page})
    },[setFollowersRequest, login, page, per_page])


    // const setPage = React.useCallback((el) => {
    //     setFollowersRequest({login:login,page:el,per_page:per_page})
    // },[setFollowersRequest,login,per_page]);

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
                <p>Followers: <span>{followers}</span></p>
                <p>Public repos: <span>{public_repos}</span></p>
            </div>
        </div>
        <div>
            <div className={s.followers}>
                {toggleFollowersIsActive
                    ? <Loader type={1} />
                    : (followersUser !== null && followersUser.map(el => <Follower setUserRequest={setUserRequest} key={el.id} {...el}/>))}
            </div>
        </div>
    </div>
});

const mstp = state => ({
    followersUser: getFollowers(state),
    toggleFollowersIsActive: getToggleFollowersIsActive(state),
    page: getPage(state),
    per_page: getPerPage(state),
})


export default connect(mstp, {setFollowersRequest})(User);