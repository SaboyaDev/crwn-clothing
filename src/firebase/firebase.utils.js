// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics' //NOt GOING TO USE FOR NOW!

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCO-GD8bArBsK_jOH_vpsyWboP8S1ewsrk',
	authDomain: 'crwn-clothing-ff2e5.firebaseapp.com',
	projectId: 'crwn-clothing-ff2e5',
	storageBucket: 'crwn-clothing-ff2e5.appspot.com',
	messagingSenderId: '84722432299',
	appId: '1:84722432299:web:e3a3887ce5f1d81158ed6e',
	measurementId: 'G-RENSTX5H34',
}

// Initialize Firebase
// **************************************************************
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app) //NOt GOING TO USE FOR NOW!

// AUTHENTICATION
// **************************************************************
export const auth = getAuth()

// SIGN-IN METHODS
// **************************************************************
const provider = new GoogleAuthProvider()

// Google Sign-In/Out
// **************************************************************
export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const signOutWithGoogle = () => signOut(auth)
// **************************************************************

// DATABASE
// **************************************************************
export const firestore = getFirestore() //DataBase
