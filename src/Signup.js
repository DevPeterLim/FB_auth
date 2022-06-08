import React from "react";
import { auth, db, storage } from './shared/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { async } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const id_ref = React.useRef(null);
    const name_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const file_link_ref = React.useRef(null);
    const navigate = useNavigate();
    const signupFB = async ()=>{ 
        const user = await createUserWithEmailAndPassword(auth, id_ref.current.value, pw_ref.current.value)
        console.log(user.user.email)
        const user_doc = await addDoc(collection(db, "users"), {
            user_id: user.user.email, 
            name: name_ref.current?.value,
            image_url: file_link_ref.current?.url
        });
        console.log("user_doc.id", user_doc.id)
        navigate(-1)
      }
    const uploadImgFB = async (e) => {
        console.log(e.target.files)
        const uploaded_file = await uploadBytes(
            ref(storage,`images/${e.target.files[0].name}`),
            e.target.files[0]);
            console.log(uploaded_file)
            const file_url = await getDownloadURL(uploaded_file.ref)
            console.log(file_url)
            file_link_ref.current = {url: file_url}
    }
    

    return (
        <div>
            Email : <input ref={id_ref}/><br/>
            이름 : <input ref={name_ref}/><br/>
            비밀번호 : <input ref={pw_ref} type="password"/><br/>
            프로필 이미지 : <input type="file" onChange={uploadImgFB}/> 

            <br/>
            <button onClick={signupFB}>회원가입</button>
        </div>
    )
} 

export default Signup;