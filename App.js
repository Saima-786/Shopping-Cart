
// import Cart_item from "./Cart_item";
import Navbar from "./Navbar";
import Cart from "./Cart";
import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      productsAll:[
        {
            price:1999,  
            title:"Watch",
            Qty:1,
            img:'https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?b=1&s=170667a&w=0&k=20&c=IfgsIwH-jjyvuiCPs0PEjIczFqWN3-RC63Z3LoMFmFM=',
            id:1
        },
        {
            price: 9999,  
            title:"Mobile Phone",
            Qty:1,
            img:'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            id:2
        },
        {
            price:58999,  
            title:"Laptop",
            Qty:1,
            img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
            id:3
        },
        {
            price:2799,  
            title:"Charger",
            Qty:1,
            img:'https://images.unsplash.com/photo-1587037542794-6ca5f4772330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
            id:4
        }
      ]
    }

  }
  handleIncreaseQuantity = (products)=>{
    const {productsAll}= this.state;
    const index = productsAll.indexOf(products);

    productsAll[index].Qty +=1;
    this.setState({productsAll})
  }
  handleDecreaseQuantity=(products)=>{
    const {productsAll}=this.state;
    const index = productsAll.indexOf(products);

    if(productsAll[index].Qty>0){
        productsAll[index].Qty -=1;
        this.setState({productsAll})
    }
  }
  handleDeleteProduct=(id)=>{
    const{productsAll}=this.state;
    const items=productsAll.filter((item)=>item.id !== id);
    this.setState({
      productsAll:items
    })
  }
  getCartCount=()=>{
    const{productsAll}=this.state;
    let Count = 0;
    productsAll.forEach((products)=>{
      Count += products.Qty;
    })
    return Count;
  }

  getCartTotal=()=>{
    const{productsAll}=this.state;
    let cartTotal=0;
    productsAll.map((products) => {
      cartTotal=cartTotal +products.Qty * products.price;
    })
    return cartTotal;
  }
  render() {
    const {productsAll}= this.state;
    return (
      <div className="App">
      <Navbar Count={this.getCartCount()}/>
        <Cart 
          productsAll={productsAll}
          key={productsAll.key}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct ={this.handleDeleteProduct}
        />
        <div style={{fontSize: 20, padding:40 ,display:'flex'}}><b>TOTAL Amount: Rs {this.getCartTotal()}</b></div>
      </div>
    );
  }
}

export default App;
