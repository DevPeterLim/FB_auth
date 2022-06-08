import React, { useState } from "react";
import styled from "styled-components"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostFB } from "./redux/postReducer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const AddPost = (props) => {
    const dispatch = useDispatch();
    const postState = useSelector((state)=>state.postReucer);
    const navigate = useNavigate();
    const img_ref = useRef(null)
    const layout_ref = useRef(null)
    const comment_ref = useRef(null)
    
    const addPostHandler = ()=>{
            dispatch(addPostFB({
                // img: img_ref.current?.value,
                // layout: layout_ref.current?.value,
                comment: comment_ref.current?.value
            }))
            navigate(-1)
        } 

    return (
        <>
            <h2>게시글 작성</h2>
            <button>이미지 업로드하기</button>
            <br/>
            <input type="text" ref={comment_ref}/>게시물 작성
            <br/>
            <button onClick={addPostHandler}>게시글 작성</button>
        </>
    )
}


export default AddPost;