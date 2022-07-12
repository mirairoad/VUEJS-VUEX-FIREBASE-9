import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "Paste Here",
  
    authDomain: "Paste Here",
  
    projectId: "Paste Here",
  
    storageBucket: "Paste Here",
  
    messagingSenderId: "Paste Here",
  
    appId: "Paste Here",
  
    measurementId: "Paste Here"
  
  };

// init firebase config
initializeApp(firebaseConfig)

// initialize firebase auth
const auth = getAuth()

export { auth }