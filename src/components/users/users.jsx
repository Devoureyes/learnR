import React from "react";
import s from './users.module.css'

let Users = (p) => {
    if(p.users.length === 0) {
        p.setUsers([
            {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: true, fullName: 'Name1', status:'Cool1', location: {city:'Moscow1',country:'Russia1'}},
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: false, fullName: 'Name2', status:'Cool2', location: {city:'Moscow2',country:'Russia2'}},
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: false, fullName: 'Name3', status:'Cool3', location: {city:'Moscow3',country:'Russia3'}},
        {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kaikov_Andrey.jpg',followed: true, fullName: 'Name4', status:'Cool4', location: {city:'Moscow4',country:'Russia4'}}
        ])
    }
    return <div className={s.users}>
        {p.users.map((u, i) => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} width="100px" src={u.photoUrl} alt=""/>
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
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
    </div>
}

export default Users;