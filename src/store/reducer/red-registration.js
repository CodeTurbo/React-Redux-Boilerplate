import ActionTypes from '../constant/constant';

var INITIAL_STATE={
    userId: "",
    userName: "",
}
const registrationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP:
            return { userName: action.payload.name, userId: action.payload.uid }
        case ActionTypes.SIGNIN:
            return { userName: action.payload.name, userId: action.payload.uid }
        default:
            return state;
    }
}
export default registrationReducer;