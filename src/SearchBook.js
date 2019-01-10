import React from 'react'
import { Button } from "react-bulma-components/full"


export default function Book({ title, author, addToCart}) {
    return (
        <div className='bookBlurb'>
            <p>
                <span>Title: </span>{title}<br/>
                <span>Author: </span>{author}<br/>
            </p>
            <Button onClick={addToCart}color="primary">Buy for 20$</Button>
        </div>
    )
}
