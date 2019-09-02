
const initialState = {
    color: '',
    message: ''
}

export const NotificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGE':
            return {
                ...state, color: action.color, message: action.message
            }
        default:
            return state;
    }
}