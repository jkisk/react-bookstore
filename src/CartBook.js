import React from 'react'



export default function CartBook({ title, subtitle, author, removeFromCart}) {
    return (
        <div className='bookBlurb'>
            <h3>Item</h3>
            <p>
                <span>Title: </span>{title}
                <span>SubTitle: </span>{subtitle}
                <span>Author: </span>{author}
            </p>
            <button onClick={removeFromCart}>Remove</button>
        </div>
    )
}