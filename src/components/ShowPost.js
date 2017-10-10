import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class ShowPost extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id);
    }

    render() {
        if(!this.props.post) {
            return <div> loading </div>;
        }
        return (
            <div>
            <Link to='/'> Back to Index </Link>
            <button type='submit' onClick={this.onDeleteClick.bind(this)} className='btn btn-default'>
                DELETE POST
            </button>
            <div>
                <h3> <strong> Title: {this.props.post.title} </strong> </h3>
                <h4> Categories: {this.props.post.categories} </h4>
                <p> Content: {this.props.post.content} </p>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {  post:state.posts.selectedPost };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
