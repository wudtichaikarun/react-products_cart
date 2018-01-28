import React, { Component } from 'react'
import { Products, Carts } from '../components'

class App extends Component {
 state = {
   products: [
    { id: 1, name: 'Product#1', amount: 10, buy: 0 },
    { id: 2, name: 'Product#2', amount: 9, buy: 0 },
    { id: 3, name: 'Product#3', amount: 8, buy: 0 },
    { id: 4, name: 'Product#4', amount: 7, buy: 0 },
    { id: 5, name: 'Product#5', amount: 6, buy: 0 }
   ],
   carts: [
    { id: 1, name: 'Product#1', amount: 10, buy: 0 }
   ]
 }
 
  render() {
    return (
      <div>
        <Products products={this.state.products}/>
        <Carts carts={this.state.carts} />
       </div>
    );
  }
}

export default App;
