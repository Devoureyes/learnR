import {connect} from "react-redux";
import {
    followAC,
    setCurrentPagesAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&take=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&take=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
                unfollow,
                follow,
                setCurrentPages,
            },
            onPageChanged
        } = this

        let scrollPagesCount = Math.ceil(totalUsersCount / (pageSize*10))
        let pages = []
        for (let i = 0; i < scrollPagesCount; i++) {
            let x = []
            for (let j = 1; j <= 10; j++) {
                i*10+j-1 < totalUsersCount/10 && x.push(i * 10 + j)
            }
            pages.push(x)
        }

        return <Users pages={pages}
                      users={users}
                      follow={follow}
                      unfollow={unfollow}
                      currentPage={currentPage}
                      onPageChanged={onPageChanged}
                      currentPages={currentPages}
                      setCurrentPages={setCurrentPages}/>
    }
}

let mapStateToProps = (state) => {
    const {
        usersPage: {
            users,
            pageSize,
            totalUsersCount,
            currentPage,
            currentPages
        }
    } = state
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        currentPages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPages: (CurrentPages) => {
            dispatch(setCurrentPagesAC(CurrentPages))
        }
    }
}

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);