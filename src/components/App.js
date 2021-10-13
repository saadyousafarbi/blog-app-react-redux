import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsIndex from './PostsIndex'
import NewPost  from './NewPost'
import ShowPost from './ShowPost'


function App() {
  return (
      <Switch>
        <Route exact path='/'> <PostsIndex /> </Route>
        <Route path='/post/add'> <NewPost /> </Route>
        <Route path='/post/:id'> <ShowPost /> </Route>
      </Switch>
  );
}

export default App
