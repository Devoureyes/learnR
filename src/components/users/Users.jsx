import React from "react";
import s from './users.module.css'
import axios from "axios";
import userPhoto from './user.jpg'

export default class UsersC extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={s.users}>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.users.map((u, i) => <div key={this.props.users.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} width="100px" src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
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
}