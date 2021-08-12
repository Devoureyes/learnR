import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {oneSerialSuccess,oneSerialFailure,oneSerialRequest} from "../../actions/lessonActions";
import {connect} from "react-redux";
import {getFetch, getOneSerial} from "./serialsReducer";
import s from "./lesson.module.css";
import Loader from "../todo/Loader";


const ShowOneFilm = props => {
    const {
        match: {
            params: {
                id
            }
        },
        oneSerial: {
            image,
            name,
            officialSite,
            summary,
            genres,
            status
        }
    } = props
    console.log(props)
    React.useEffect(() => {
        props.oneSerialRequest(id)
    },[id])

    return props.fetch ? <Loader type={1} /> : <div className={s.showOneFilm}>
        <div className={s.showOneFilmTitle_Img}>
            <div className={s.showOneFilmImg}><img alt={''} className={s.img}
                                                   src={image !== null ? image.original : 'http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'}/>
            </div>
            <div className={s.showOneFilmTite}>
                <div>Name: <span>{name}</span></div>
                <div>Site: <a href={officialSite}>{officialSite}</a></div>
                <div>Genres: {genres !== null && genres.map((el,i) => <span key={i}>{el} </span>)}</div>
                <div>Status: <span>{status}</span></div>
            </div>
        </div>
        <div className={s.showOneFilmSummary}>
            <div style={{color: 'white'}} dangerouslySetInnerHTML={{__html: summary}}/>
        </div>
    </div>
}


const mstp = state => ({
    oneSerial: getOneSerial(state),
    fetch: getFetch(state)
})

const mdtp = {oneSerialSuccess,oneSerialFailure,oneSerialRequest}

export default compose(withRouter, connect(mstp,mdtp))(ShowOneFilm);