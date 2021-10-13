import React, {useState} from 'react'
import { createPost } from '../actions/index'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function NewPost(props) {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    function handleSubmit() {
        createPost({title: title, category: category, content: content})
        history.push('/')
    }

    return (
        <Form onSubmit={() => handleSubmit()} className='input-group'>
            <h3> Create A New Post </h3>
            <div>
                <label> Title </label>
                <input
                    type='text'
                    className='form-control'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            </div>
            <div>
                <label> Category </label>
                <input
                    type='text'
                    className='form-control'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
            </div>
            <div>
                <label> Content </label>
                <textarea
                    type='text'
                    className='form-control'
                    value={content}
                    onChange={event => setContent(event.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-default'> Submit </button>
        </Form>
    )
}

export default NewPost
