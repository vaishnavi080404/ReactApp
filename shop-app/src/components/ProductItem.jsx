import React, { useState } from 'react';
import './Products.css';
import ProductDate from './ProductDate';
import Card from './Card';

function ProductItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle('Popcorn'); // ✅ Correct usage
    console.log('clicked');
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item_description'>
        <h2>{title}</h2>
        <div className='product-item_price'>₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;
