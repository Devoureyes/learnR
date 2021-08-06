import React from 'react';
import s from "./message.module.css";
import PropTypes from "prop-types";

const Message = (p) => {
    return <div className={s.messages}>{p.m}</div>
}

export default Message;

Message.propTypes = {
    m: PropTypes.string
}