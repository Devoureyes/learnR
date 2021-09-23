import {connect} from "react-redux";


import {
    follow,
    unfollow,
    setPageSize,
    toggleIsFollowingProgress,
    setCurrentPage,
    setCurrentPages,
    setUsersRequest,
    setTotalUsersCount
} from '../../actions/usersPageActions'
import React from "react";
import Users from "./Users";
import Loader from "../todo/Loader";
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getCurrentPages, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from '../../redux/testReducer';



class UsersContainer extends React.Component {

    componentDidMount() {
        const payload = {
            currentPage: this.props.currentPage,
            pageSize: this.props.pageSize
        }
        this.props.setUsersRequest(payload)
        console.log(this.props)
    }

    onPageChanged = (pageNumber) => {
        const payload = {
            currentPage: pageNumber,
            pageSize: this.props.pageSize
        }
        this.props.setUsersRequest(payload)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        prevProps.currentPage !== this.props.currentPage && window.scrollTo(0, 0)
    }

    render() {
        const {
            props: {
                totalUsersCount,
                pageSize,
                users,
                currentPages,
                currentPage,
                setCurrentPages,
                isFetching,
                followingInProgress,
                follow,
                unfollow
            },
            onPageChanged,
        } = this
        let scrollPagesCount = Math.ceil(totalUsersCount / (pageSize * 10));
        let pages = [];
        for (let i = 0; i < scrollPagesCount; i++) {
            let x = [];
            for (let j = 1; j <= 10; j++) {
                i * 10 + j - 1 < totalUsersCount / pageSize && x.push(i * 10 + j);
            }
            pages.push(x);
        }
        return isFetching ? <Loader type={3}/> : <Users pages={pages}
                                                        users={users}
                                                        currentPage={currentPage}
                                                        onPageChanged={onPageChanged}
                                                        currentPages={currentPages}
                                                        follow={follow}
                                                        unfollow={unfollow}
                                                        setPageSize={setPageSize}
                                                        followingInProgress={followingInProgress}
                                                        setCurrentPages={setCurrentPages}/>;
    }
}

let mstp = state => {
    return {
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        currentPages:getCurrentPages(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}

let mdtp = {
    follow,
    unfollow,
    setCurrentPage,
    setCurrentPages,
    toggleIsFollowingProgress,
    setUsersRequest,
    setTotalUsersCount
}


export default compose(WithAuthRedirect,connect(mstp,mdtp))(UsersContainer)
