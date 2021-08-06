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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length+1, message: action.newMessageBody}],
            };
        default:
            return state;
    }
}

export const sendMessage = newMessageBody => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;