import React, { useState } from "react";
import styled from "styled-components"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostFB } from "./redux/postReducer";
import { useForm } from "react-hook-form";

const AddPost = (props) => {
    const dispatch = useDispatch();
    const postState = useSelector((state)=>state.postReucer);
    
    const img_ref = useRef(null)
    const layout_ref = useRef(null)
    const comment_ref = useRef(null)
    
    // const addPostHandler = ()=>{
    //     dispatch(addPostFB({
    //     }))
    // } 
    const tempHandler = () => {
        console.log(props.name)
    }

    return (
        <>
            <h2>게시글 작성</h2>
            <button>이미지 업로드하기</button>
            <h3>레이아웃 고르기</h3>
            <input type="radio"/>레이아웃1
            <input type="radio"/>레이아웃2
            <input type="radio"/>레이아웃3
            <br/>
            <input type="text" ref={comment_ref}/>게시물 작성
            <br/>
            <button onClick={tempHandler}>게시글 작성</button>
        </>
    )
}


export default AddPost;