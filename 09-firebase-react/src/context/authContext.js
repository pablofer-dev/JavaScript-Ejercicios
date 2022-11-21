import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
export const authContentx = createContext();

export const useAuth = () => {
    const context = useContext(authContentx)
    return context
}

export function AuthProvider({ children }) {
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    return <authContentx.Provider value={{ signUp }}>{children}</authContentx.Provider>
}