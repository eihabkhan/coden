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

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
        const {displayName, email} = user
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.error('Error creating user:', err);
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objects) => {
    const collectionRef = firestore.collection(collectionKey)
    console.log(collectionRef);

    const batch = firestore.batch()
    objects.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)         
    })
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase