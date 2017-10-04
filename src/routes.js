import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostIndex from './components/PostIndex';
import Post from './components/Post';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={PostIndex} />
        <Route path='post/add' component={Post} />
    </Route>
);
