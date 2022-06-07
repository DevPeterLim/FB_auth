import React from "react";
import { useRef } from "react";
import { auth, db } from "./shared/firebase";
import {signInWithEmailAndPassword}from "firebase/auth"
import { async } from "@firebase/util";
import { getDoc, getDocs, where, query, collection } from "firebase/firestore";


const Login = () => {
    const id_ref = useRef(null);
    const pw_ref = useRef(null);
    const loginFB = async () => {
        const user = await signInWithEmailAndPassword(auth, id_ref.current.value, pw_ref.current.value);
        console.log(user)
        const user_docs = await getDocs(query(
            collection(db, "users"), where("user_id", "==", user.user.email)
        ));
        user_docs.forEach(u=> console.log(u.data()))
    } 

    return (
        <div>
            Email : <input type="email" ref={id_ref}/><br/>
            Password : <input type="password" ref={pw_ref}/><br/>
            <button onClick={loginFB}>로그인</button>
        </div>
    )
}

export default Login;