import { db } from "../shared/firebase";
import { collection, getDocs, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

// Action Type
const LOAD_POST = 'postReducer/LOAD_POST';
const ADD_POST = 'postReducer/ADD_POST';
const UPDATE_POST = 'postReducer/UPDATE_POST';
const DELETE_POST = 'postReducer/DELETE_POST';

const GET_REQ = 'postReducer/GET_REQ'
const REQ_SUCCESS = 'postReducer/REQ_SUCCESS'
const REQ_ERROR = 'postReducer/REQ_ERROR'

//init state
const initState = {
    list: [],
    loading: false,
    error: null
}

//Action Creator
function loadPost (payload) {
    return {type: LOAD_POST, payload}
}

function addPost (payload) {
    return {type: ADD_POST, payload}
}

function updatePost (payload) {
    return {type: UPDATE_POST, payload}
}

function deletePost (payload) {
    return {type: DELETE_POST, payload}
}
//CRUD w/FB
export const getPostRequest = (payload) => {
    return {type : GET_REQ, payload}
}

export const getPostSuccess = (payload) => {
    return {type : REQ_SUCCESS, payload}
}

export const getPostError  = (payload) => {
    return {type : REQ_ERROR, payload}
}

// middlewares
export const loadPostFB = () => {
    return async function(dispatch) {
        dispatch(getPostRequest(true));
        try {
            const post_data = await getDocs(collection(db, "posts"))
            let post_list = [];
            
            post_data.forEach((doc) => {
                post_list.push({id : doc.id, ...doc.data()});
            });
            dispatch(loadPost(post_list)); 
        } catch (error) {
            dispatch(getPostError(error));
        } finally {
            dispatch(getPostRequest(false));
        }
    }
}

export const addPostFB = (payload) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "posts"), payload);
        const post_data = {id:docRef.id, ...payload};
        dispatch(addPost(post_data));
        console.log(post_data);
    }
}


export default function postReducer(state=initState, action = {}){
    switch (action.type){
        case LOAD_POST: {
            return {list: action.payload}
        } case ADD_POST: {
            return {...state, list: action.payload}
        } case GET_REQ: {
            return {...state, loading: action.payload}
        } default:
            return state;
    }
}