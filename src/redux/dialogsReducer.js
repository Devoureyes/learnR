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
            state.newMessageBody = action.text;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push(({id: 6, message: body}))
            state.newMessageBody = ''
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, text: text})

export default dialogsReducer;