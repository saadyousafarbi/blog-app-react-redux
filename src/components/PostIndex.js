import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div>
                    <Link to='/post/add'>
                        Add a Post
                    </Link>
                </div>
                List of posts
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostIndex);
