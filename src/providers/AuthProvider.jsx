import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser =(name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser)
            setUser(currentUser);
            const userInfo = currentUser?.email || user?.email;
            const loggedUser = {email: userInfo}
            if(currentUser){
                axiosPublic.post('/jwt', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                    // if(res.data?.token){
                    //     // localStorage.setItem('access-token', res.data.token)
                    // }
                    setLoading(false)
                })
            }
            else{
                axiosPublic.post('/logout', loggedUser, {withCredentials: true})
                .then(res=>{
                    // console.log(res.data)
                    setLoading(false)
                })
            }
            // console.log(currentUser)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;