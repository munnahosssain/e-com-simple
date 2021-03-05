import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity } = props.product;
    const reviewItemStyle = { 
        borderBottom:'1px solid red',
        marginBottom:'5px',
        paddingBottom:'10px',
        marginLeft:'100px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h2 className="product-name">{name}</h2>
            <h4>Quantity: {quantity}</h4>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;