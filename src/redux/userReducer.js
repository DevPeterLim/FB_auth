import { db } from "../shared/firebase";
import { getDocs, where, collection, query, getDoc  } from "firebase/firestore";
import { async } from "@firebase/util";
import Login from "../Login";

const initUser = {
    user : {
        userId : null,
        userName : null,
        userImg : null, 
    },
    loading : false,
    error : null
}

//action types
const GET_USER = 'userReducer/GET_USER';

const LOGIN_REQ = 'userReducer/LOGIN_REQ';
const LOGIN_SUCCESS = 'userReducer/LOGIN_SUCCESS';
const LOGIN_ERROR = 'userReducer/LOGIN_ERROR';

//action creator func
const getUser = (payload) => {
    return {type:GET_USER, payload}
};
export const loginRequest = (payload) =>{
    return {type:LOGIN_REQ, payload}
};
export const loginSuccess = (payload) =>{
    return {type:LOGIN_SUCCESS, payload}
};
export const loginError = (payload) =>{
    return {type:LOGIN_ERROR, payload}
};

export const getUserFB = () => {
    return async function (dispatch) {
        let getUserInfo = [];
        const nowUser = await getDocs(query(collection(db, "users"), where("userId", "==", )));
        nowUser.forEach( doc => {
            getUserInfo.push({id: doc.id, ...doc.data()});
        });
        console.log(getUserInfo, ": userInfo")
        console.log(getUserInfo.userId);
        dispatch(getUser(getUserInfo));
    }
}

export default function userReducer (state = initUser, action){
    switch (action.type) {
        case GET_USER : {
            return {...state, user: action.payload}
        } 
        case LOGIN_REQ : {
            return {...state, loading: action.payload};
        }
        case LOGIN_ERROR : {
            return {...state, error: action.payload};
        }
        default :
        return state;
    }
}