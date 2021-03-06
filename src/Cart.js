import React, { Component } from 'react'
import CartBook from './CartBook'



export default class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            inCartBooks: [],
            total: 0
        })
    }
    

    render() {

        return (
            <div>
                {this.props.inCartBooks.map(b => {
                    return <CartBook key={b.id} {...b} removeFromCart={() => this.props.removeFromCart(b.id)} />
                })}
                <br/>
                Grand Total: ${this.props.total * 20}
            </div>
        )


    }
}
