import React, { useState } from "react";
import styled from "styled-components"
import { useRef } from "react";

const AddPost = () => {

    const [comment, setComment] = useState("");

    const img_ref = useRef(null)
    const layout_ref = useRef(null)
    const comment_ref = useRef(null)

    const addPostHandler = ()=>{

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
            <button>게시글 작성</button>
        </>
    )
}

const ImageUpload = styled.div`

`


export default AddPost;