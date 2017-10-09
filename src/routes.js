import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostsIndex from './components/PostsIndex';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path='post/add' component={NewPost} />
        <Route path='post/:id' component={ShowPost} />
    </Route>
);
