import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import firebaseAuthentication from "../firebase/firebase.init"

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // signin with Google
    const singInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     // setUser(result.user)
            //     console.log(result.user)
            // })
            .catch(error => {
                setError(error.message)
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        });
    }, [])


    // Log Out the user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }


    return {
        singInUsingGoogle,
        user,
        error,
        logOut
    }

};

export default useFirebase;