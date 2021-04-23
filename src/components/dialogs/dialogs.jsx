import s from './dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (p) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={`/messages/${p.n}`}>
                {p.name}
            </NavLink>
        </div>
    )
}

const Messagge = (p) => {
    return (
        <div className={s.messages}>{p.m}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem n="1" name="Andrew"/>
                <DialogItem n="2" name="Andy"/>
                <DialogItem n="3" name="Andrew_bot"/>
            </div>
            <div className={s.messages}>
                <Messagge m="hi"/>
                <Messagge m="yo"/>
                <Messagge m="lol"/>
            </div>
        </div>
    )
}

export default Dialogs;