import React from "react";
import s from './lesson.module.css'
import {NavLink} from "react-router-dom";

const OneFilm = props => {
    const {
        id,
        image,
        name,
        status
    } = props
    return <div className={s.onefilm}>
        <NavLink to={'show/'+id}><img alt={''} className={s.img}
                src={image !== null ? image.medium : 'http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'}/>
            <div>{name}</div>
            <div>{status}</div>
        </NavLink>
    </div>
}

export default OneFilm;