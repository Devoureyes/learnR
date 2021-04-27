import s from "./dialogitem.module.css";
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

export default DialogItem;