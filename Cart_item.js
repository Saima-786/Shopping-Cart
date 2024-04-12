
import React from 'react'
import  './index.css'

const Cart_item = (props) => {
  const{price,title,Qty}=props.products;
  return (
    <div className='Cart-item'>

      <div className='Left-block'>
        <img className='Left-block' src={props.products.img} alt=''/>
      </div>

      <div className='right-block'>
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color:'#777'}}>Rs {price}</div>
        <div style={{color:'#777'}}>Qty: {Qty}</div>
        <div className='cart-item-actions'>
          {/*buttons*/}

          <img  alt='Increase' className='action-icons' src=''
            onClick={()=> props.onIncreaseQuantity(props.products)}/>
          <img alt='Decrease' className='action-icons' src=''
            onClick={()=> props.onDecreaseQuantity(props.products)}/>
          <img alt='Delete' className='action-icons' src=''
          onClick={()=> props.onDeleteProduct(props.products.id)}/>

        </div>
      </div>
    </div>
  )
  }
 


export default Cart_item

// const Cart_item = () => {
 
 
  // increaseQuantity = ()=>{
  //   // this.state.Qty +=1;
  //   // this.setState({
  //   //   Qty : this.state.Qty +1
  //   // });
  //   this.setState((prevState)=> {
  //     return{Qty: prevState.Qty +1}
  //   });
  //   console.log('this.state');
  // }
  // decreaseQuantity =()=>{
  //   this.setState((prevState)=>{if(prevState.Qty>0){
  //     return{Qty: prevState.Qty-1}}
  //   });
  // }





