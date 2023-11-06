import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


const auth = getAuth(app);

export const Context = createContext(null);

const Provider = ({ children }) => {

    const [user, setUser] = useState("");

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (name, photo) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current logged in user", currentUser);
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, []);


    const Info = { createUser, signIn, user, logOut, profileUpdate }

    return (
        <Context.Provider value={Info}>
            {children}
        </Context.Provider>
    );
};

export default Provider;