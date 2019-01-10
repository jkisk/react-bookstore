import React from 'react'
import { Button } from "react-bulma-components/full"



export default function CartBook({ title, subtitle, author, removeFromCart }) {
    return (
        <div className='bookBlurb'>
            <p>
                <br />
                <span>Title: </span>{title}
                <br />
                <span>SubTitle: </span>{subtitle}
                <br />
                <span>Author: </span>{author}
                <br />
            </p>
            <br/>
            <Button onClick={removeFromCart} color="primary">Remove</Button>
        </div>
    )
}