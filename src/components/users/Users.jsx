import React from "react";
import s from "./users.module.css";
import userPhoto from "./user.jpg";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const {
            users,
            currentPages,
            currentPage,
            unfollow,
            follow,
            pages,
            setCurrentPages,
            onPageChanged
        } = props


    return <div className={s.users}>
        {users.map((u, i) => <div key={i}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+u.id}>
                                <img className={s.userPhoto} width="100px"
                                    src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </NavLink>
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
            {pages[currentPages] !== undefined && currentPages === 0 ? '' :
                <span onClick={() => setCurrentPages(currentPages - 1)}>⇚</span>
            }
            {pages[currentPages] !== undefined && pages[currentPages].map((pageNumber, i) => {
                return <span key={i} onClick={(e) => onPageChanged(pageNumber)}
                             className={currentPage === pageNumber ? s.selectedPage : ''}>{pageNumber}</span>
            })}
            {pages[currentPages] !== undefined && currentPages === pages.length-1 ? '' :
                <span onClick={() => setCurrentPages(currentPages + 1)}>⇛</span>
            }
        </div>
    </div>
}


Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    currentPages: PropTypes.number,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    pages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    unfollow: PropTypes.func,
    follow: PropTypes.func,
    setCurrentPages: PropTypes.func,
}

export default Users