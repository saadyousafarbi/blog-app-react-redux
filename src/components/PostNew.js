import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {

    render() {
        const { fields: { title, categories, content }, handleSubmit } =this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3> Create A New Post</h3>
                <div>
                    <label> Title </label>
                    <input type='text' {...title.input}/>
                    <div>
                        {title.error}
                    </div>
                </div>
                <div>
                    <label> Category </label>
                    <input type='text' {...categories.input}/>
                </div>
                <div>
                    <label> Content </label>
                    <textarea type='text' {...content.input}/>
                </div>
                <button type='submit'> Submit </button>
                <button> Cancel </button>
            </form>
        );
    }
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostNew);

