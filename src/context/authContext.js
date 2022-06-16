import { useState, useEffect, createContext, useContext } from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);
    
    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password);
    
    const logout = () => signOut(auth);
    
    useEffect( () => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            console.log({currentUser});
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubcribe();

    }, [])
    
    
    
    return (
        <authContext.Provider value={{signup, login, user, logout, loading}}>
            {children}
        </authContext.Provider>
    )
}
