import {connect} from "react-redux";
import {follow,
    setCurrentPages,
    setTotalUsersCount,
    setCurrentPage,
    setUsers,
    unfollow, setIsFetching} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Loader from "../todo/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&take=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&take=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
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
                isFetching
            },
            onPageChanged
        } = this

        let scrollPagesCount = Math.ceil(totalUsersCount / (pageSize * 10))
        let pages = []
        for (let i = 0; i < scrollPagesCount; i++) {
            let x = []
            for (let j = 1; j <= 10; j++) {
                i * 10 + j - 1 < totalUsersCount / 10 && x.push(i * 10 + j)
            }
            pages.push(x)
        }

        return isFetching ? <Loader type={3}/> : <Users pages={pages}
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
            currentPages,
            isFetching
        }
    } = state
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        currentPages,
        isFetching
    }
}
let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setCurrentPages,
    setIsFetching,
}

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);