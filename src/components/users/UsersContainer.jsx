import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setTotalUsersCount,
    setCurrentPage,
    setUsers,
    unfollow,
    toggleIsFetching,
    toggleFollowingInProgress,
    setPageSize
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Loader from "../todo/Loader";
import {userAPI, followAPI, unFollowAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI(this.props.currentPage, this.props.pageSize).then(r => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(r.items)
            this.props.setTotalUsersCount(r.totalCount)
        })
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
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        userAPI(pageNumber, this.props.pageSize).then(r => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(r.items)
        })
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
                i * 10 + j-1 < totalUsersCount / pageSize && x.push(i * 10 + j)
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setCurrentPages,
    toggleIsFetching,
    toggleFollowingInProgress,
    setPageSize
}

// eslint-disable-next-line no-undef
export default connect(mstp, mdtp)(UsersContainer);