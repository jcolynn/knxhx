import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDGPXhY-ttjgbqcnZ4ShGxmlOqiHqfuscw",
    authDomain: "knxhx2019.firebaseapp.com",
    databaseURL: "https://knxhx2019.firebaseio.com",
    projectId: "knxhx2019",
    storageBucket: "",
    messagingSenderId: "290426352442"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;