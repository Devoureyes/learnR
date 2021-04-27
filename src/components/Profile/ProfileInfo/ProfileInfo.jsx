import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.imgtop} src="https://look.com.ua/pic/201603/1920x1200/look.com.ua-155959.jpg" alt=""/>
            </div>
            <div className={s.profile}>
                <div>
                    <img className={s.imgprofile} src="s.png" alt=""/>
                </div>
                <div className={s.stats}>
                    <p className={s.name}>Andrew</p>
                    <ul className={s.ulp}>
                        <li className={s.statitem}>Возраст: 23</li>
                        <li className={s.statitem}>Город: Москва, Россия</li>
                        <li className={s.statitem}>Работа: Мосэнергопроект</li>
                        <li className={s.statitem}>Хобби: кодинг</li>
                    </ul>
                </div>
                <div className={s.spotify}>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://open.spotify.com/embed/track/3PHt7AdVhjIMS5Yw5RIZKU" width="300" height="80"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://open.spotify.com/embed/track/3XThhoyJ1t7mgRs66frPtr" width="300" height="80"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;