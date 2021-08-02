import React from "react";
import s from './job.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({job}) => {
    return <div className={s.main}>
        <div className={s.title}>Поиск работы:</div>
        <div className={s.desc}>{job}</div>
    </div>
}