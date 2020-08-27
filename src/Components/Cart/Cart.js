import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    // const total= cart.reduce((total,course)=>total + course.price,0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total+ course.price;
        
    }
    const tax = (total /10).toFixed(2) ;
    const sum=(total + Number(tax)).toFixed(2);
    const formatDigit = num => {
        const fixed = num.toFixed(2);
        return Number(fixed);
    } 
    return (
        <div>
            <h1> Your Wish List</h1>
            <h2>Course Order : {cart.length}</h2>
            <h2>Course Price: {formatDigit(total)}</h2>
            <h3><small>E-Tax : {tax}</small> </h3>
            <h2> Total Purchase : {sum}</h2>

        </div>
    );
};

export default Cart;