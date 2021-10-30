import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import firebaseAuthentication from "../firebase/firebase.init"

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // signin with Google
    const singInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     // setUser(result.user)
            //     console.log(result.user)
            // })
            // .catch(error => {
            //     setError(error.message)
            // })
            .finally(() => setIsLoading(false))

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])


    // Log Out the user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    return {
        singInUsingGoogle,
        user,
        error,
        logOut,
        isLoading
    }

};

export default useFirebase;