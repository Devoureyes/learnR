const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}
let initialState = {
    names: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Andy'},
        {id: 3, name: 'Andrew_bot'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'lol'},
        {id: 3, message: 'Yo'},
    ] as Array<MessagesType>,
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any): initialStateType => {
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
type sendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessage = (newMessageBody:string):sendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;