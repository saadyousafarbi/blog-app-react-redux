import { projectConfig } from '../config';

const INITIAL_STATE = { allPosts: [], selectedPost: null };
const FETCH_POSTS = projectConfig.FETCH_POSTS;
const FETCH_POST = projectConfig.FETCH_POST;
const DELETE_POST = projectConfig.DELETE_POST;

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POST:
            return { ...state, selectedPost: action.payload.data };
        case FETCH_POSTS:
            return { ...state, allPosts: action.payload.data };
        case DELETE_POST:
            return state;

        default:
            return state;
    }
}
