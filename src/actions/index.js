import axios from 'axios';
import { projectConfig } from '../config';

const FETCH_POSTS = projectConfig.FETCH_POSTS;
const CREATE_POST = projectConfig.CREATE_POST;

const ROOT_URL = projectConfig.ROOT_URL;
const API_KEY = projectConfig.API_KEY;

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
    return dispatch => axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
    .then(
        post => dispatch({ type: CREATE_POST, payload: post })
    )
    .catch(
        err => dispatch({ type: 'CREATE_POST_FAILED', payload: err })
    );
}
