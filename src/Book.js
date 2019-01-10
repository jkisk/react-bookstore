import React from 'react'
import { Button } from "react-bulma-components/full"


export default function Book({ title, subtitle, author, published, publisher, pages, description, website, addToCart }) {
    return (
        <div>
            <p>
                <span>Title: </span>{title}<br />
                <span>Subtitle: </span>{subtitle}<br />
                <span>Author: </span>{author}<br />
                <span>Published: </span>{published}<br />
                <span>Publisher: </span>{publisher}<br />
                <span>Pages: </span>{pages}<br />
                <span>Description: </span>{description}<br />
                <span>Website: </span>{website}<br />
                <Button onClick={addToCart} color="primary">Buy for 20$</Button>
                <br />
                <br/>
            </p>
        </div>
    )
}
