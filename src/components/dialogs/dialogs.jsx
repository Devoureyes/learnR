import s from './dialog.module.css'
import DialogItem from "./dialogitem/dialogitem";
import Message from "./message/message";


const Dialogs = (p) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {p.state.names.map((el) => <DialogItem n={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {p.state.messages.map((el) => <Message message={el.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;