import { createContext, useContext } from "react";

export const authContentx = createContext();

export const useAuth = () => {
    const context = useContext(authContentx)
    return context
}

export function AuthProvider({ children }) {
    const user = {
        login: true
    }
    return <authContentx.Provider value={{ user }}>{children}</authContentx.Provider>
}