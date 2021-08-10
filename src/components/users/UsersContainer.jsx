import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setCurrentPage,
    unfollow,
    toggleFollowingInProgress,
    requestUsers, setPageSize
} from "../../redux/usersReducer";
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
    getTotalUsersCount, getUsersSelector
} from '../../redux/userSelectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber,this.props.pageSize)
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
        users:getUsersSelector(state),
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
    toggleFollowingInProgress,
    requestUsers
}


export default compose(WithAuthRedirect,connect(mstp,mdtp))(UsersContainer)
