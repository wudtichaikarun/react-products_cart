import React, { Component } from 'react'

class Carts extends Component {
  render() {
    return (
      <div className="card small-width">
        <h5 className="card-header bg-primary text-white small-padding">Cart</h5>
        {
          this.props.carts.map(
            (cart, index) => 
            <form key={index}>
              <div>
                <span className="product-name">{cart.name}</span>
                <span className="amount">9</span>
              </div>
 
              <button className="btn btn-outline-primary">Remove</button> 
            </form>
          )
        }
      </div>
    )
  }
}

export default Carts