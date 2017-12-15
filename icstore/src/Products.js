import React, { Component } from 'react';
import Request from 'superagent';

class Products extends Component {

  state = {allProducts: []}
  
  //takes json object and replaces state so we have data to render
    componentDidMount() {
      fetch('/allProducts')
        .then(res => res.json())
        .then(allProducts => this.setState({ allProducts }));
    }

    addToCart(e){
      let shoeId = e.target.value;
      let endpoint = 'http://localhost:8000/idProduct';
      Request
      .post(endpoint)
      .send({ ShoeId: shoeId})
      .set('accept', 'json')
      .end((err, res) => {
        'Request didnt work'
      });
    }

    render() {
      
      return (
        <div className='product_table' >
					{this.state.allProducts.map(products =>
          <div className= 'product_cell' key={products.ShoeId}>
            <figure>
              <h2>{products.Name}</h2>
              <img src={products.Image} alt="sd" className='images' />
              <figcaption>
                <p>{products.Description}</p>
                <p>Colorway: {products.Color}</p>
                <p>Price: ${products.Price}.00</p>
                <p>Category: {products.Category}</p>
                <form method='POST'>
                  <button type="button" value={products.ShoeId} onClick={(e)=> this.addToCart(e)}>Add to Cart</button>
                </form>
              </figcaption>
            </figure>
          </div>                            
        )}
        </div>
      )
    }
  }
  
  export default Products;