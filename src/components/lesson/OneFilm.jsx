import React from "react";
import s from './lesson.module.css'
import {NavLink} from "react-router-dom";

const OneFilm = props => {
    const {
        id,
        image,
        name,
        officialSite,
        summary
    } = props
    return <div className={s.onefilm}>
        <NavLink to={'show/'+id}><img className={s.img}
                src={image !== null ? image.original : 'http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'}/>
            <div>{name}</div>
            <div>{officialSite}</div>
            <div dangerouslySetInnerHTML={{__html: summary}}/>
        </NavLink>
    </div>
}

export default OneFilm;