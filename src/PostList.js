import React from "react";
import styled from "styled-components";

const Post = () => {
    return (
        <div>
            <PostBorder>
                <PostHead>
                    <span className="userProfileImage">userProfileImage</span>
                    <span className="modifiedDate">modifiedDate</span>
                </PostHead>
                <PostBody>
                    <div className="mainImage">여기는 포스트 이미지입니다. </div>
                    <div className="mainDesc">여기는 포스트의 내용이 들어가는 곳입니다.</div>
                </PostBody>
                <div className="postFooter">
                    <div className="likeNum">좋아요 N개</div>
                    <div className="likeBtn">좋아요 버튼</div>
                </div>
            </PostBorder>
        </div>
    )
}

const PostList = () => {
    return (
        <Post></Post>
    )
}

const PostBorder = styled.div`
    margin-top: 20px;
    border: solid 2px grey;
`

const PostHead = styled.div`
    background-color: grey;
`

const PostBody = styled.div`
    background-color: red;
    windth:30em;
    height:30em;
`
 

export default PostList;