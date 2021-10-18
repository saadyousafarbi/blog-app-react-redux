import React from 'react'
import { createPost } from '../actions/index'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Formik } from "formik";
import {connect} from "react-redux";

function NewPost(props) {
    const history = useHistory()

    return (
        <Formik initialValues={{
            'title': '',
            'category': '',
            'content': ''
        }} onSubmit={({title, category, content}) => {
            props.createPost({title: title, category: category, content: content})
                .then(res => history.push('/'))
            // todo: add catch block and update state
        }} >
            {({ values, handleChange, handleBlur, handleSubmit}) => {
                return (
                    <Form onSubmit={handleSubmit} className='input-group'>
                        <h3> Create A New Post </h3>
                        <div>
                            <label> Title </label>
                            <input
                                placeholder='Title'
                                name='title'
                                type='text'
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <label> Category </label>
                            <input
                                placeholder='category'
                                name='category'
                                type='text'
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <label> Content </label>
                            <textarea
                                placeholder='content'
                                name='content'
                                type='text'
                                value={values.content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <button type='submit' className='btn btn-default'> Submit </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default connect(null, { createPost })(NewPost)
