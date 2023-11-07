import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


const auth = getAuth(app);

export const Context = createContext(null);

const Provider = ({ children }) => {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const profileUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current logged in user", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, []);


    const Info = { createUser, signIn, user, logOut, profileUpdate, googleSignIn, loading };

    return (
        <Context.Provider value={Info}>
            {children}
        </Context.Provider>
    );
};

export default Provider;