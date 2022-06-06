import React from "react";
import TopNav from "./TopNav";
import PostList from "./PostList.js"
import { findByLabelText } from "@testing-library/react";

const Main = () => {
    return (
        <>
        <PostList></PostList>
        </>
    )
}

export default Main;