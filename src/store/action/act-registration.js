import ActionTypes from '../constant/constant';
import firebase from '../../config/firebase';
import history from '../../config/history';

export function actSignUp(user) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((createdUser)=>{
            console.log('signed up successfully', createdUser.uid);
            delete user.password;
            user.uid = createdUser.uid;
            firebase.database().ref(`users/${createdUser.uid}/`).set(user).then(()=>{
                // firebase.database().ref('users/').once('value').then((userData)=>{
                //     let allUsers = userData.val();
                //     let currentUserUid = firebase.auth().currentUser.uid;
                //     dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                //     dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                //     firebase.database().ref('message/').once('value').then((messagesData)=>{
                //         let messages = messagesData.val();
                //         console.log(messages);
                //         dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                //         history.push('/chat');
                //     })
                // })
                dispatch({ type: ActionTypes.SIGNUP, payload: user })
            })
        }).catch(error=>{
            console.log('Error - ' + error.message);
        });
    }
}

export function actSignIn(user) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((signedinUser)=>{
            firebase.database().ref(`users/${signedinUser.uid}`).once('value').then((userData)=>{
                let fbUser = userData.val();
                if(user.type === fbUser.type){
                    dispatch({ type: ActionTypes.SIGNIN, payload: user });
                    localStorage.setItem('user', JSON.stringify(fbUser));
                    if(fbUser.type==="stu"){
                        history.push('/home-student');
                    } else if(fbUser.type==="com"){
                        history.push('/home-company');
                    } else if(fbUser.type==="adm"){
                        history.push('/admin');
                    }
                } else{
                    console.log("no user in this type.");
                }
            })
        }).catch(error=>{
            console.log('Error - ' + error.message);
        });
    }
}