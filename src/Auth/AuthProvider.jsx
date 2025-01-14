import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword( auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const manageProfile = ( name, photo ) => {
        return  updateProfile( auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        })

        return () => unsubscribe()
    },[])

    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        logIn,
        logOut,
        manageProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;