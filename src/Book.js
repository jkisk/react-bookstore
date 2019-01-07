import React from 'react'


export default function Book({ title, subtitle, author, published, publisher, pages, description, website, addToCart}) {
    return (
        <div className='bookBlurb'>
            <p>
                <span>Title: </span>{title}<br/>
                <span>Subtitle: </span>{subtitle}<br/>
                <span>Author: </span>{author}<br/>
                <span>Published: </span>{published}<br/>
                <span>Publisher: </span>{publisher}<br/>
                <span>Pages: </span>{pages}<br/>
                <span>Description: </span>{description}<br/>
                <span>Website: </span>{website}<br/>
            </p>
            <button onClick={addToCart}>Buy for 20$</button>
        </div>
    )
}
