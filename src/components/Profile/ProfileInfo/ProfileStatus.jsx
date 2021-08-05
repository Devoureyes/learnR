import React from 'react';
import s from './ProfileInfo.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = (e) =>{
        this.setState({
            editMode: e,
        })
        if(e===false){
            this.props.update(this.state.status)
        }
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        const {
            activateEditMode,
            state: {
                status
            },
            onStatusChange
        } = this
        return <div>
            {this.state.editMode
                ? <input onChange={onStatusChange} autoFocus={true} onBlur={() => activateEditMode(false)} type="text" value={status}/>
                : <span onClick={() => activateEditMode(true)} className={s.status}>{this.props.status}</span>}
        </div>;
    }
}