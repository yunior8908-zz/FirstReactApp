export const setMessage = (color, message) => {
    return {
        type: 'MESSAGE',
        color: color,
        message: message
    }
}