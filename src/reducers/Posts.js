import { projectConfig } from '../config';

const INITIAL_STATE = { allPosts: [], selectedPost: null };
const FETCH_POSTS = projectConfig.FETCH_POSTS;

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };

        default:
            return state;
    }
}
