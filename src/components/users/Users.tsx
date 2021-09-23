import React from "react";
import s from "./users.module.css";
import userPhoto from "./user.jpg";
import {NavLink} from "react-router-dom";
import Select from 'react-select'

type propsType = {
    users: any
    currentPages: number
    currentPage: number
    pages: any
    setCurrentPages: any
    onPageChanged: (pageNumber:number) => void
    follow: any
    setPageSize: any
    unfollow: any
    followingInProgress: Array<number>
}

const Users = (props:propsType) => {
    const {
            users,
            currentPages,
            currentPage,
            pages,
            setCurrentPages,
            onPageChanged,
            follow,
            unfollow,
            followingInProgress,
    } = props


    return <div>
        <div className={s.users}>
            {users.map((u:any, i:number) => <div key={i}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto} width="100px"
                                     src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id => id === u.id)}
                                          onClick={() => {unfollow(u.id)}}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === u.id)}
                                          onClick={() => {follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
        <div style={{width: '30%', margin: 'auto'}}>
            <Sel />
        </div>
        <div className={s.pages}>
            {pages[currentPages] !== undefined && currentPages === 0 ? '' :
                <span onClick={() => setCurrentPages(currentPages - 1)}>⇚</span>
            }
            {pages[currentPages] !== undefined && pages[currentPages].map((pageNumber:number, i:number) => {
                return <span key={i} onClick={(e) => onPageChanged(pageNumber)}
                             className={currentPage === pageNumber ? s.selectedPage : ''}>{pageNumber}</span>
            })}
            {pages[currentPages] !== undefined && currentPages === pages.length-1 ? '' :
                <span onClick={() => setCurrentPages(currentPages + 1)}>⇛</span>
            }
        </div>
    </div>
}

const Sel = () => {
    let options = [
        {value: 10, label: '10'},
        {value: 25, label: '25'},
        {value: 50, label: '50'}
    ]
    return <Select options={options}/>
}

export default Users