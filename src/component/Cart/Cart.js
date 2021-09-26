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
            <h3> Developer Hired : {props.team.length}</h3>
            <h3>Total Cost : ${total} </h3>


        </div>
    );
};

export default Cart;