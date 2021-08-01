import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setTotalUsersCount,
    setCurrentPage,
    setUsers,
    unfollow, setIsFetching
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Loader from "../todo/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&take=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {'API-KEY': 'b057d183-97e6-4b4b-a821-718b9dfb3361'}
        })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    Follow = (id) => {
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + id, {}, {
            withCredentials: true,
            headers: {'API-KEY': 'b057d183-97e6-4b4b-a821-718b9dfb3361'}
        })
            .then(r => {
                if (r.data.resultCode === 0)
                    this.props.follow(id)
            })
    }
    unFollow = (id) => {
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id,  {
            withCredentials: true,
            headers: {'API-KEY': 'b057d183-97e6-4b4b-a821-718b9dfb3361'}
        })
            .then(r => {
                if (r.data.resultCode === 0)
                    this.props.unfollow(id)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&take=${this.props.pageSize}`,{
            headers: {'API-KEY': 'b057d183-97e6-4b4b-a821-718b9dfb3361'}
        })
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
                setCurrentPages,
                isFetching
            },
            onPageChanged,
            Follow,
            unFollow
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
                                                        Follow={Follow}
                                                        unFollow={unFollow}
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