// Action Type
const LOAD_POST = 'postReducer/LOAD_POST';
const ADD_POST = 'postReducer/ADD_POST';
const UPDATE_POST = 'postReducer/UPDATE_POST';
const DELETE_POST = 'postReducer/DELETE_POST';

//init state
const initState = {
    list: []
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

export default function postReducer(state=initState, action = {}){
    switch (action.type){
        case LOAD_POST: {
            return {...state, list: action.payload}
        }
        default:
            return state;
    }
}