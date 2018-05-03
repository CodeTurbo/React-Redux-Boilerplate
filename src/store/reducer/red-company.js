import ActionTypes from '../constant/constant';

var INITIAL_STATE={
    name: '',
    email: '',
    loading: false
}
const companyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_COMPANY_INFO:
            return { name: action.payload.name, email: action.payload.email, loading:false }
        default:
            return state;
    }
}
export default companyReducer;