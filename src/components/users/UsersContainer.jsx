import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setCurrentPage,
    unfollow,
    toggleFollowingInProgress,
    getUsers
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Loader from "../todo/Loader";
import {followAPI, unFollowAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    followUser = (id) => {
        this.props.toggleFollowingInProgress(true, id)
        followAPI(id).then(r => {
                r && this.props.follow(id)
                this.props.toggleFollowingInProgress(false, id)
            }
        )
    }
    unFollowUser = (id) => {
        this.props.toggleFollowingInProgress(true, id)
        unFollowAPI(id).then(r => {
                r && this.props.unfollow(id)
                this.props.toggleFollowingInProgress(false,id)
            }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
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
                followingInProgress
            },
            onPageChanged,
            followUser,
            unFollowUser
        } = this

        let scrollPagesCount = Math.ceil(totalUsersCount / (pageSize * 10))
        let pages = []
        for (let i = 0; i < scrollPagesCount; i++) {
            let x = []
            for (let j = 1; j <= 10; j++) {
                i * 10 + j - 1 < totalUsersCount / pageSize && x.push(i * 10 + j)
            }
            pages.push(x)
        }

        return isFetching ? <Loader type={3}/> : <Users pages={pages}
                                                        users={users}
                                                        currentPage={currentPage}
                                                        onPageChanged={onPageChanged}
                                                        currentPages={currentPages}
                                                        follow={followUser}
                                                        unfollow={unFollowUser}
                                                        followingInProgress={followingInProgress}
                                                        setCurrentPages={setCurrentPages}/>
    }
}

let mstp = (state) => {
    const {
        usersPage: {
            users,
            pageSize,
            totalUsersCount,
            currentPage,
            currentPages,
            isFetching,
            followingInProgress
        }
    } = state
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        currentPages,
        isFetching,
        followingInProgress
    }
}

let mdtp = {
    follow,
    unfollow,
    setCurrentPage,
    setCurrentPages,
    toggleFollowingInProgress,
    getUsers
}

// eslint-disable-next-line no-undef
export default connect(mstp, mdtp)(UsersContainer);