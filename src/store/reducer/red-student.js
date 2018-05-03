import ActionTypes from '../constant/constant';

var INITIAL_STATE={
    name: '',
    email: '',
    loading: false,
    userDetils: {}
}
const studentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_STUDENT_INFO:
            return { name: action.payload.name, email: action.payload.email, loading:false }
        // case ActionTypes.SHOW_DETAILS:
        //     return { ...state, userDetils: action.payload }
        default:
            return state;
    }
}
export default studentReducer;