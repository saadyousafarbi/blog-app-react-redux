import { projectConfig } from '../config'

const INITIAL_STATE = { allPosts: [], selectedPost: null, postsUpdated: false }
const FETCH_POSTS = projectConfig.FETCH_POSTS
const FETCH_POST = projectConfig.FETCH_POST
const DELETE_POST = projectConfig.DELETE_POST
const CREATE_POST = projectConfig.CREATE_POST
const UPDATED_POSTS_VIEWED = projectConfig.UPDATED_POSTS_VIEWED

export default function(state = INITIAL_STATE, action) {
    console.log('action', action)
    switch(action.type) {
        case FETCH_POST:
            return { ...state, selectedPost: action.payload.data }
        case FETCH_POSTS:
            return { ...state, allPosts: action.payload.data }
        case DELETE_POST:
            return { ...state, postsUpdated: true}
        case CREATE_POST:
            return {...state, allPosts: [...state.allPosts, action.payload.data], postsUpdated: true}
        case UPDATED_POSTS_VIEWED:
            return {...state, postsUpdated: false}

        default:
            return state;
    }
}
