import s from './dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (p) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={"/messages/" + p.n}>
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

let d = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Andy'},
    {id: 3, name: 'Andrew_bot'},
]

let m = [
    {id:1, m: 'Hi'},
    {id:2, m: 'lol'},
    {id:3, m: 'Yo'},
]

const Dialogs = (p) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {d.map((el) => <DialogItem n={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {m.map((el) => <Messagge m={el.m}/>)}
            </div>
        </div>
    )
}

export default Dialogs;