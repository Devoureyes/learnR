import React from "react";
import s from './users.module.css'
import axios from "axios";
import userPhoto from './no_poster.jpg'
let Users = (p) => {
    let getUsers = () => {
        if (p.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    p.setUsers(response.data.items)
                })
        }
    }
    return <div className={s.users}>
        <button onClick={getUsers}>Get Users</button>
        {p.users.map(u  => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} width="100px" src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {p.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {p.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            )}
    </div>
}

export default Users;