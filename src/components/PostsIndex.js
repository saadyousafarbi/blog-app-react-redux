import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
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

    render() {
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
                    {this.renderPosts()}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.allPosts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
