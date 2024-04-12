
import React from 'react'
import  './index.css'
import Cart_item from "./Cart_item";

const Cart=(props)=>{

  const {productsAll} = props;
  return(
    <div className='Cart'>
        {productsAll.map((products)=>{
            return (
                <Cart_item 
                products={products} 
                key={products.id}
                onIncreaseQuantity={props.onIncreaseQuantity}
                onDecreaseQuantity={props.onDecreaseQuantity}
                onDeleteProduct ={props.onDeleteProduct}/>
                )
        })}
    </div>
  );  
}
export default Cart;


