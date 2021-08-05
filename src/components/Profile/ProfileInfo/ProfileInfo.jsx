import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../todo/Loader';
import Job from '../Job/Job';
import userPhoto from '../../users/user.jpg';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
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
    } = props;
    return <React.Fragment>
        <div className={s.profileInfo}>
            <div>
                <img className={s.imgtop} src="https://look.com.ua/pic/201603/1920x1200/look.com.ua-155959.jpg" alt=""/>
            </div>
            <div key={userId} className={s.profile}>
                <div>
                    <img className={s.imgprofile} src={photos.large ? photos.large : userPhoto} alt=""/>
                </div>
                <div className={s.stats}>
                    <p className={s.name}>{fullName}</p>
                    <ProfileStatus update={updateStatus} status={status}/>
                    <ul className={s.ulp}>
                        <li>Facebook: {contacts.facebook}</li>
                        <li>Instagram: {contacts.instagram}</li>
                        <li>VK: {contacts.vk}</li>
                        <li>Github: {contacts.github}</li>
                        <li>Twitter: {contacts.twitter}</li>
                    </ul>
                </div>
                <div className={s.spotify}>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://open.spotify.com/embed/track/3PHt7AdVhjIMS5Yw5RIZKU" width="300" height="80"
                            frameBorder="0" allow="encrypted-media"/>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://open.spotify.com/embed/track/3XThhoyJ1t7mgRs66frPtr" width="300" height="80"
                            frameBorder="0" allow="encrypted-media"/>
                </div>
            </div>
        </div>
        {lookingForAJob ? <Job job={lookingForAJobDescription}/> : <div>Не ищу работу</div>}
    </React.Fragment>;
};

export default ProfileInfo;