import React from 'react';
import s from './ProfileInfo.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
const ProfileStatusHook = ({update, status}) => {

    let [editMode, setEditMode] = React.useState(false)
    let [statusNew,setStatusNew] = React.useState(status)

    React.useEffect(() => {
       setStatusNew(status);
    },[status]);

    let deactivateEditMode = () => {
        setEditMode(false)
        update(statusNew)
    }


    return <div>
      {editMode
          ? <input onChange={(e) => setStatusNew(e.currentTarget.value)}
                   autoFocus={true} onBlur={deactivateEditMode} type="text" value={statusNew}/>
          : <span onClick={() => setEditMode(true)} className={s.status}>{status}</span>}
  </div>
}

export default ProfileStatusHook;