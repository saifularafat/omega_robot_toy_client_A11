
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    /* social login */
    const socialLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    /* page observer state Change function */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentAuth => {
            setUser(currentAuth)
            setLoading(false)
        })
        //  stop observer while unmounting
        return () => {
            return unsubscribe();
        }

    }, [])

    const info = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        socialLogin
    }
    return <AuthContext.Provider value={ info } >
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;