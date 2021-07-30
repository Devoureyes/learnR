import React from "react";
import axios from "axios";
import s from "./users.module.css";
import userPhoto from "./no_poster.jpg";
import PropTypes from "prop-types";

export default class Users extends React.Component {

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
        prevProps.currentPage !== this.props.currentPage && window.scrollTo(0,0)
    }

    render() {

        const {
            props: {
                totalUsersCount,
                currentPages,
                currentPage,
                pageSize,
                users,
                follow,
                unfollow,
                setCurrentPages
            }
        } = this

        let pagesCount = Math.ceil(totalUsersCount / pageSize)
        let scrollPagesCount = Math.ceil(pagesCount / 10)
        let pages = []

        for (let i = 0; i < scrollPagesCount; i++) {
            let x = []
            for (let j = 1; j <= 10; j++) {
                x.push(i * 10 + j)
            }
            pages.push(x)
        }
        // debugger
        /* while (totalUsersArray.count) {
             pages.push(totalUsersArray.slice(0, pageCount))
             totalUsersArray.splice(0, pageCount)
         }*/

        return <div className={s.users}>
            {users.map((u, i) => <div key={i}>
                    <span>
                        <div>
                            <img className={s.userPhoto} width="100px"
                                 src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            )}
            <div className={s.pages}>
                {pages[currentPages] !== undefined && currentPages - 1 === 0 ? '' :
                    <span onClick={() => setCurrentPages(currentPages - 1)}>⇚</span>
                }
                {pages[currentPages] !== undefined && pages[currentPages - 1].map((pageNumber, i) => {
                    return <span key={i} onClick={(e) => this.onPageChanged(pageNumber)}
                                 className={currentPage === pageNumber ? s.selectedPage : ''}>{pageNumber}</span>
                })}
                {pages[currentPages] !== undefined && currentPages === pages.length-1 ? '' :
                    <span onClick={() => setCurrentPages(currentPages + 1)}>⇛</span>
                }
            </div>
        </div>
    }
}

Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    totalUsersCount: PropTypes.number,
    currentPages: PropTypes.number,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    unfollow: PropTypes.func,
    setCurrentPages: PropTypes.func,
}