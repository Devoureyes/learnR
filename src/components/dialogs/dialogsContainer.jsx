import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

/*const DialogsContainer_old = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().messagesPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMessageChange = (text) => {
                store.dispatch(updateNewMessageBodyCreator(text));
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}/>
        }
        }
    </StoreContext.Consumer>
}*/

let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {dispatch(sendMessageCreator());},
        sendMessage:(text) => {dispatch(updateNewMessageBodyCreator(text));},
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;