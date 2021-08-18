import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../todo/Loader';
import Job from '../Job/Job';
import userPhoto from '../../users/user.jpg';
import ProfileStatusHook from "./ProfileStatusHook";


const ProfileInfo = (props) => {

    const { savePhoto } = props
    const onMainPhotoSelect = React.useCallback((e) => {
        if(e.target.files.length) {
            console.log(e.target.files[0])
            savePhoto(e.target.files[0])
        }
    },[savePhoto])

    if (!props.profile) {
        return <Loader type={1}/>;
    }
    const {
        profile: {
            photos,
            contacts,
            fullName,
            lookingForAJob,
            lookingForAJobDescription,
            userId,
        },
        updateStatus,
        status,
        isOwner
    } = props;

    return <React.Fragment>
        <div className={s.profileInfo}>
            <div>
                <img className={s.imgtop} src="https://look.com.ua/pic/201603/1920x1200/look.com.ua-155959.jpg" alt=""/>
            </div>
            <div key={userId} className={s.profile}>
                <div>
                    <img className={s.imgprofile} src={photos.large || userPhoto} alt=""/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
                </div>
                <div className={s.stats}>
                    <p className={s.name}>{fullName}</p>
                    <ProfileStatusHook update={updateStatus} status={status}/>
                    <ul className={s.ulp}>
                        <li>Facebook: {contacts.facebook}</li>
                        <li>Instagram: {contacts.instagram}</li>
                        <li>VK: {contacts.vk}</li>
                        <li>Github: {contacts.github}</li>
                        <li>Twitter: {contacts.twitter}</li>
                    </ul>
                </div>
                <div className={s.spotify}>
                </div>
            </div>
        </div>
        {lookingForAJob ? <Job job={lookingForAJobDescription}/> : <div className={s.work}>Не ищу работу</div>}
    </React.Fragment>;
};

export default ProfileInfo;