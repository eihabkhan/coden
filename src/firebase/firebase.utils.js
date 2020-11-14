import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD9kbvoNP1qeeNcfuWzaRxvuBIXMQaivWE",
    authDomain: "coden-e5cdc.firebaseapp.com",
    databaseURL: "https://coden-e5cdc.firebaseio.com",
    projectId: "coden-e5cdc",
    storageBucket: "coden-e5cdc.appspot.com",
    messagingSenderId: "948826769697",
    appId: "1:948826769697:web:c3ec5586fb5fcde5fb5660",
    measurementId: "G-2K6EHCXZJ3"
}

firebase.initializeApp(firebaseConfig)
// firebase.analytics();

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)