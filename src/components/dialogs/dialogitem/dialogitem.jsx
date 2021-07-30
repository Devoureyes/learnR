import s from "./dialogitem.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types'


const DialogItem = (p) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/messages/" + p.number}>
                {p.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;

DialogItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number
}