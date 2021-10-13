import axios from 'axios'
import { projectConfig } from '../config'

const FETCH_POSTS = projectConfig.FETCH_POSTS;
const CREATE_POST = projectConfig.CREATE_POST;
const FETCH_POST = projectConfig.FETCH_POST;
const DELETE_POST = projectConfig.DELETE_POST;

const ROOT_URL = projectConfig.ROOT_URL
const API_KEY = projectConfig.API_KEY

export function fetchPosts() {
    return dispatch => axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .then(
          data => dispatch({ type: FETCH_POSTS, payload: data })
        )
        .catch(
          err => dispatch({ type: 'LOAD_DATA_FAILURE', payload: err })
        );
}

export function createPost(props) {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
    .then(
        post => {
            return { type: CREATE_POST, payload: post }
        }
    )
    .catch(
        err => {
            return { type: 'CREATE_POST_FAILED', payload: err }
        }
    )
}

export function fetchPost(postId) {
    return dispatch => axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`)
        .then(
          data => dispatch({ type: FETCH_POST, payload: data })
        )
        .catch(
          err => dispatch({ type: 'FETCH_POST_FAILED', payload: err })
        );
}

export function deletePost(postId) {
    return dispatch => axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`)
        .then(
          data => dispatch({ type: DELETE_POST, payload: data })
        )
        .catch(
          err => dispatch({ type: 'DELETE_POST_FAILED', payload: err })
        );
}
