import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {oneSerialSuccess,oneSerialFailure,oneSerialRequest} from "../../actions/lessonActions";
import {connect} from "react-redux";
import {getFetch, getOneSerial} from "./serialsReducer";
import s from "./lesson.module.css";
import Loader from "../todo/Loader";


const ShowOneFilm = props => {
    console.log(props)
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
            summary
        }
    } = props

    React.useEffect(() => {
        props.oneSerialRequest(id)
    },[id])

    return props.fetch ? <Loader type={1} /> : <div>
        <img alt={''} className={s.img}
             src={image !== null ? image.medium : 'http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'}/>
        <div>{name}</div>
        <div>{officialSite}</div>
        <div dangerouslySetInnerHTML={{__html: summary}}/>
    </div>
}


const mstp = state => ({
    oneSerial: getOneSerial(state),
    fetch: getFetch(state)
})

const mdtp = {oneSerialSuccess,oneSerialFailure,oneSerialRequest}

export default compose(withRouter, connect(mstp,mdtp))(ShowOneFilm);