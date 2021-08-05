import React from 'react';
import s from './ProfileInfo.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () =>{
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        const {
            props: {
                status
            },
            activateEditMode
        } = this
        return <div>
            {this.state.editMode
                ? <input autoFocus={true} onBlur={activateEditMode} type="text" value={status}/>
                : <span onClick={activateEditMode} className={s.status}>{status}</span>}
        </div>;
    }
}