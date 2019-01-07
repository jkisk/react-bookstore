import React from 'react'


export default function AdminBook({ title, subtitle, author, published, publisher, pages, description, website, deleteBook, updateBook}) {
    return (
        <div className='bookBlurb'>
            <p>
                <span>Title: </span>{title}<br/>
                <span>: </span>{subtitle}<br/>
                <span>Author: </span>{author}<br/>
                <span>Published: </span>{published}<br/>
                <span>Publisher: </span>{publisher}<br/>
                <span>Pages: </span>{pages}<br/>
                <span>Description: </span>{description}<br/>
                <span>Website: </span>{website}<br/>
            </p>
            <button onClick={updateBook}>Update Book Info</button>
            <button onClick={deleteBook}>Delete Book</button>
        </div>
    )
}