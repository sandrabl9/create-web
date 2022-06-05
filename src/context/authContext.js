import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    
    return context
}

export const AuthProvider = ({children}) => {
    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);
    
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    
    
    
    return (
        <authContext.Provider value={{signup, login}}>
            {children}
        </authContext.Provider>
    )
}
