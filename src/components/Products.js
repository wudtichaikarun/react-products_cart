import React, { Component } from 'react'

class Products extends Component {

  render() {
    return (
      <div className="card small-width">
      <h5 className="card-header bg-primary text-white small-padding">Product</h5>
      {
        this.props.products.map(
          (product, index) => 
          <form key={index}>
            <p>{product.name}</p>
            <button className="btn btn-outline-primary">Add to Cart</button>
          </form>
        )
      }
    </div>
    )
  }
}

export default Products