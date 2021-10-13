import React, {useEffect, } from 'react'
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index'
import { Link, useParams, useHistory } from 'react-router-dom'

function ShowPost(props) {
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        props.fetchPost(id);
    }, [])

    function onDeleteClick() {
        props.deletePost(id);
        history.push('/')
    }

    return (
    !props.post ?
    <div> Loading Post </div> :
    <div>
        <Link to='/'> Back to Index </Link>
        <button type='submit' onClick={onDeleteClick} className='btn btn-default'>
            DELETE POST
        </button>
        <div>
            <h3> <strong> Title: {props.post.title} </strong> </h3>
            <h4> Categories: {props.post.categories} </h4>
            <p> Content: {props.post.content} </p>
        </div>
    </div>
    )
}

function mapStateToProps(state) {
    return {  post:state.posts.selectedPost }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost)
