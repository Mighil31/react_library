import React from 'react';

function Book(props) {


    return (
        <div className="bookCard">
            <div className="bookdeets">
                <div className="tag">
                    <span className='label'>Title:</span>
                    <span className='deets'>{props.bookData.title.substring(0, 50)}</span>
                </div>
                <div className='tag'>
                    <span className='label'>Author:</span>
                    <span className='deets'>{props.bookData.author}</span>
                </div>
                <div className='tag'>
                    <span className='label'>Pages:</span>
                    <span className='deets'>{props.bookData.pages}</span> 
                </div>
                <div className='tag'>
                    <span className='label'>Read:</span>
                    <span className='deets'>{props.bookData.read ? "Yes" : "No"}</span>
                </div>

            </div>
            <div className="image">
                <img src={props.bookData.image} alt="p"></img>
            </div>
            <div className="buttons">
                <button onClick={props.showEditForm} >Edit</button>
                <button className='delete' onClick={props.removeBook}>Delete</button>
            </div>
        </div>
    )   
}

export default Book