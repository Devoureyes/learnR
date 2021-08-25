import React, {useState,useCallback} from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../todo/Loader';
import userPhoto from '../../users/user.jpg';
import ProfileStatusHook from "./ProfileStatusHook";
import Contacts from "./Contacts";
import ProfileDataForm from "./ProfileDataForm";
import NetworkError from "../../errors/NetworkError";


const ProfileInfo = (props) => {

    const {savePhoto,saveProfile} = props
    const onMainPhotoSelect = useCallback((e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }, [savePhoto])
    const onSubmit = useCallback(props => {
        saveProfile(props)
        setEditMode(false)
    },[saveProfile])

    const [editMode,setEditMode] = useState(false)

    if (!props.profile) {
        return <Loader type={1}/>;
    }
    const {
        profile: {
            contacts,
            photos,
            fullName,
            userId,
        },
        updateStatus,
        status,
        isOwner,
        error
    } = props;

    return <React.Fragment>
        <div className={s.profileInfo}>
            <div>
                <img className={s.imgtop} src="https://look.com.ua/pic/201603/1920x1200/look.com.ua-155959.jpg" alt=""/>
            </div>
            <div key={userId} className={s.profile}>
                <div className={s.imgPro}>
                    <img className={s.imgprofile} src={photos.large || userPhoto} alt=""/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
                </div>
                <div className={s.stats}>
                    <p className={s.name}>{fullName}</p>
                    <ProfileStatusHook update={updateStatus} status={status}/>
                    {error !== '' && <NetworkError error={error} />}
                    {editMode
                        ? <ProfileDataForm contacts={contacts} initialValues={props.profile} onSubmit={onSubmit}/>
                        : <ProfileData setEditMode={setEditMode} isOwner={isOwner} profile={props.profile}/>}
                </div>
            </div>
        </div>
    </React.Fragment>;
};

const ProfileData = ({profile,isOwner,setEditMode}) => {
    const {aboutMe, contacts, lookingForAJob, lookingForAJobDescription} = profile

    return <div>
        {isOwner && <button onClick={setEditMode}>Edit</button>}
        <Contacts contacts={contacts}/>
        <b>Looking for a job: </b>{lookingForAJob ? 'yes' : 'no'}
        <div><b>My professional skills:</b>{lookingForAJobDescription}</div>
        <div>
            <b>About me:</b> {aboutMe}
        </div>
    </div>
}





export default ProfileInfo;