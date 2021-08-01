import React from "react";
import s from './ProfileInfo.module.css'
import Loader from "../../todo/Loader";
import Job from "../Job/Job";
const ProfileInfo = (p) => {
    if (!p.profile) {
        return <Loader type={1}/>
    }
    const {
        profile: {
            aboutMe,
            photos,
            contacts,
            fullName,
            lookingForAJob,
            lookingForAJobDescription,
            userId
        }
    } = p
    return <React.Fragment>
        <div className={s.profileInfo}>
            <div>
                <img className={s.imgtop} src="https://look.com.ua/pic/201603/1920x1200/look.com.ua-155959.jpg" alt=""/>
            </div>
            <div className={s.profile}>
                <div>
                    <img className={s.imgprofile} src={photos.large} alt=""/>
                </div>
                <div className={s.stats}>
                    <p className={s.name}>{fullName}</p>
                    <ul className={s.ulp}>
                        <li>Facebook: {contacts.facebook}</li>
                        <li>Instagram: {contacts.instagram}</li>
                        <li>VK: {contacts.vk}</li>
                        <li>Github: {contacts.github}</li>
                        <li>Twitter: {contacts.twitter}</li>
                    </ul>
                </div>
                <div className={s.spotify}>
                    <iframe src="https://open.spotify.com/embed/track/3PHt7AdVhjIMS5Yw5RIZKU" width="300" height="80"
                            frameBorder="0" allow="encrypted-media"/>
                    <iframe src="https://open.spotify.com/embed/track/3XThhoyJ1t7mgRs66frPtr" width="300" height="80"
                            frameBorder="0" allow="encrypted-media"/>
                </div>
            </div>
        </div>
        {lookingForAJob ? <Job job={lookingForAJobDescription}/> : <div>Не ищу работу</div>}
    </React.Fragment>
}

export default ProfileInfo;