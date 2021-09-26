import React from 'react';

import './Cart.css'
const Cart = (props) => {
    const { team } = props;
    let total = 0;
    for (const teams of team) {
        total = total + teams.salary;
    }

    return (
        <div className="cart">
            <h2> Developer Hired : {props.team.length}</h2>
            <h2>Total Cost : ${total} </h2>


        </div>
    );
};

export default Cart;