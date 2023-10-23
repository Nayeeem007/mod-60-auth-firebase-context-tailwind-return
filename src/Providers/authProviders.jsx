 import { createContext, useEffect, useState } from "react";
 import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
 import app from '..firebase/firebase.config' 
export const AuthContext = createContext(null) ;
 
     const auth = getAuth(app);
     const provider = new GoogleAuthProvider();


const authProviders = ({children}) => {

    const [user,setUser] = useState(null);
    const [load,setLoading ] =useState(true);

    const createUser = (email,password ) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

        const signInWithGoogle = ( ) => {
            return signInWithPopup(auth,GoogleAuthProvider)
        }

        const logOut = ( ) => {
            return signOut(auth)
            }


    // Observe auth state change 
    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth State Changed ', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe()
    }, []); 

    const authInfo = {
        user,
        load,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default authProviders;