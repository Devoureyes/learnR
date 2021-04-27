import s from "./message.module.css";

const Message = (p) => {
    return <div className={s.messages}>{p.message}</div>
}

export default Message;