import React from "react";
import s from './lesson.module.css'

const OneFilm = props => {
    const {
        image,
        name,
        officialSite,
        summary
    } = props
    return <div className={s.onefilm}>
        <img className={s.img} src={image !== null ? image.original : 'http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'}/>
        <div>{name}</div>
        <div>{officialSite}</div>
        <div dangerouslySetInnerHTML={{__html: summary}} />
    </div>
}

export default OneFilm;