import s from "./message.module.css";

const Message = (p) => {
    return <div className={s.messages}>{p.m}</div>
}

export default Message;