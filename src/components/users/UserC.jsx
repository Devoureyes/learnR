import React from "react";
import axios from "axios";
import s from "./users.module.css";
import userPhoto from "./no_poster.jpg";

export default class UserC extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&take=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={s.users}>
            {this.props.users.map(u  => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} width="100px" src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
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
            <button >More</button>
        </div>
    }
}