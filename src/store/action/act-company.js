import ActionTypes from '../constant/constant';
import firebase from '../../config/firebase';

export function updateInfoFirebase(companyDetail) {
    return dispatch => {
        firebase.database().ref(`companyDetail/${companyDetail.uid}`).set(companyDetail).then(()=>{
            dispatch({ type: ActionTypes.UPDATE_COMPANY_INFO, payload: companyDetail })
        }).catch(error=>{
            console.log('Error - ' + error.message);
        });
    }
}

export function publishVacancy(arg) {
    return dispatch => {
        firebase.database().ref(`vacancy/`).push(arg).then(()=>{
            console.log("Done!");
            // dispatch({ type: ActionTypes.UPDATE_COMPANY_INFO, payload: arg })
        }).catch(error=>{
            console.log('Error - ' + error.message);
        });
    }
}