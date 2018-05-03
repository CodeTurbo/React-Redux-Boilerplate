import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDqlEXIDD84_m2moCVP9oVQ-nUmT2Wg8N8",
    authDomain: "saud-hackathon.firebaseapp.com",
    databaseURL: "https://saud-hackathon.firebaseio.com",
    projectId: "saud-hackathon",
    storageBucket: "saud-hackathon.appspot.com",
    messagingSenderId: "879686899374"
};
export default firebase.initializeApp(config);