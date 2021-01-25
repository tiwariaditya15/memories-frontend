import * as api from '../api/index';
import { FETCH_ALL, UPDATE, CREATE, DELETE, LIKE } from '../constants/actionTypes'; 
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    }catch(error){
        console.log(error.message);
    }
   
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id);
        // console.log(">>retunrd deleted post", data);
        dispatch({type: DELETE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        // console.log("likePost action", data);
        dispatch({type: LIKE, payload: data});
    } catch (error) {
        console.log(error);
    }
}; 