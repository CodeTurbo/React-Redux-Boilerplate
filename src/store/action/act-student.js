import ActionTypes from '../constant/constant';
import firebase from '../../config/firebase';

export function updateInfoFirebase(userDetails) {
    return dispatch => {
        firebase.database().ref(`userDetails/${userDetails.uid}`).set(userDetails).then(()=>{
            dispatch({ type: ActionTypes.UPDATE_STUDENT_INFO, payload: userDetails })
        }).catch(error=>{
            console.log('Error - ' + error.message);
        });
    }
}

export function UploadMarksToFb(marks) {
    let table = marks.term;
    let student = marks.uid;
    delete marks.uid;
    delete marks.term;
    return dispatch => {
        firebase.database().ref(`studentMarks/${table}/${student}`).set(marks).then(()=>{
            dispatch({ type: ActionTypes.UPLOAD_STUDENT_MARKS, payload: marks })
        }).catch(error=>{
            console.log('Error - ' + error.message);
        });
    }
}

// export function showData(id) {
//     return dispatch => {
//         firebase.database().ref(`userDetails/${id}`).on('value', (snapshot)=>{
//             snapshot.forEach(function(childSnapshot) {
//                 var childData = childSnapshot.val();
//             });
//             console.log(snapshot.val())
//             dispatch({ type: ActionTypes.UPLOAD_STUDENT_MARKS, payload: snapshot.val() })
//         });
//     }
// }