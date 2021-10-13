import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function PostsIndex(props) {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    function renderPosts() {
        return props.posts.map((post) => {
        return (
            <ListGroupItem key={post.id} className='list-group-item'>
                <Link to={'post/' + post.id}>
                    <strong>{post.title}</strong>
                    <span className='pull-right'>{post.categories}</span>
                </Link>
            </ListGroupItem>
            );
        });
    }

    return (
        <div>
            <h2> Welcome to Redux Blog App.</h2>
            <div>
                <Link to='/post/add'>
                    Add a New Post
                </Link>
            </div>
            <h3>Available Posts</h3>
            <ListGroup>
                {renderPosts()}
            </ListGroup>
        </div>
    )
}

function mapStateToProps(state) {
    return { posts: state.posts.allPosts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)

