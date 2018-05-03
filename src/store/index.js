import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registrationReducer from './reducer/red-registration';
import studentReducer from './reducer/red-student';
import companyReducer from './reducer/red-company';

const store = createStore(
    combineReducers({
        registrationReducer,
        studentReducer,
        companyReducer
    }),
    applyMiddleware(thunk)
);

export default store;