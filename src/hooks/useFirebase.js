import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import inializeAuthentication from "../pages/Login/firebase/firebase.init";

inializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })

    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({});
            }
        })
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        users,
        logOut,
        signInUsingGoogle
    }
}

export default useFirebase;