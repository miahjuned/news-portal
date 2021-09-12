import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config'

export const initializeSignIn = () =>{
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    else {
    firebase.app(); 
    }    

}
// export const googleSignIn = () => {
//     const auth =getAuth();
//         const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return (
//         .signInWithPopup()
//     )
// }

export const googleSignIn =() =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then(res => {
            const googleLoginUser = res.user;
            return googleLoginUser;
        }) 
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
            const errorMessage = error.message;
            alert(errorMessage);
            const email = error.email;
            alert(email);
        });

    
}

    