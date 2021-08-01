const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    names: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Andy'},
        {id: 3, name: 'Andrew_bot'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'lol'},
        {id: 3, message: 'Yo'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.text
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newMessageBody}],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, text: text})

export default dialogsReducer;