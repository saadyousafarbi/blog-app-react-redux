import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Form } from 'react-bootstrap';

class NewPost extends Component {
    static ContextType = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
        .then(() => {
            this.props.router.push('/');
        });
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='input-group'>
                <h3> Create A New Post </h3>
                <div>
                    <label> Title </label>
                    <input type='text' className='form-control'  {...title}/>
                </div>
                <div>
                    <label> Category </label>
                    <input type='text' className='form-control' {...categories}/>
                </div>
                <div>
                    <label> Content </label>
                    <textarea type='text' className='form-control' {...content}/>
                </div>
                <button type='submit' className='btn btn-default'> Submit </button>
                <Link to='/'>
                    <button className='btn btn-default'> Cancel </button>
                </Link>
            </Form>
        );
    }
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostForm',
    fields: ['title', 'categories', 'content'],
}, null, { createPost })(NewPost);

