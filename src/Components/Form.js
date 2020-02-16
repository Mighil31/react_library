import React from 'react'

function Form(props) {
    return (
        <div className="container">
            <div className='p'>
                <form action="">

                    <div className='formElement'>
                        <label for="title">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            onChange={props.handleChange} 
                            value={props.data.title}
                            placeholder="name of book"
                            />
                    </div>

                    <div className='formElement'>
                        <label for="author">Author</label>
                        <input 
                            type="text" 
                            id="author" 
                            onChange={props.handleChange} 
                            value={props.data.author}
                            name="author" 
                            placeholder="Name of the author"
                        />
                    </div>

                    <div className='formElement'>
                        <label for="pages">Pages</label>
                        <input 
                            type="text" 
                            id="pages" 
                            value={props.data.pages}
                            onChange={props.handleChange} 
                            name="pages" 
                            placeholder="Number of pages in book"
                        />
                    </div>

                    <div className='formElement'>
                        <label for="image">Image Url</label>
                        <input 
                            type="text" 
                            id="image" 
                            value={props.data.image}
                            onChange={props.handleChange} 
                            name="image" 
                            placeholder="Image URL"
                        />
                    </div>

                    <div className="read-status">
                        <div className="radio-option">
                            <label htmlFor="hasRead">Read?</label>
                            <input
                            type="checkbox"
                            name="read"
                            id="hasRead"
                            onChange={props.handleChange}
                            checked={props.data.read === 'true' || props.data.read === true }
                            />
                        </div>  
                    </div>

                    <button
                        className="button submit-book"
                        onClick={props.edit ? props.handleEdit : props.handleSubmit}
                    >
                        Add Book</button>

                </form>
            </div>
            
        </div> 
    )
}

export default Form