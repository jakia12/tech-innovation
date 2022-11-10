import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';




const AuthContext = createContext();

//auth password authentication
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    //sign up 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //google sign in
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    //update user profile

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    //auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    }, []);


    const getAuthInfo = { user, loading, setLoading, createUser, logOut, login, googleSignIn, updateUserProfile };


    return (
        <AuthContext.Provider value={getAuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthState = () => {
    return useContext(AuthContext);
}
export default AuthProvider;


