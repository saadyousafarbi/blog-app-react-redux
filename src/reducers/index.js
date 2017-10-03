import { combineReducers } from 'redux';
import Posts from './Posts';

const rootReducer = combineReducers({
    posts: Posts
});

export default rootReducer;
