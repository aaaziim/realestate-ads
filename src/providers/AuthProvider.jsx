import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile ,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from "../firebase/firebase.config"

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name,photoURL )=>{
            return updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            });
    }

    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password);

    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
           
                setUser(currentUser)
        setLoading(false)

            
        })
        return ()=>{
            unSubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        registerUser,
        updateUserProfile,
        userLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;