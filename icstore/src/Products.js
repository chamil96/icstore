import React, { Component } from 'react';
// import Request from 'superagent';
import initialState from './initialState';

class Products extends Component {

  constructor(){
    super();
    this.state = initialState;
  }
  
  // takes json object and replaces state so we have data to render
    componentDidMount() {
      fetch('/allProducts')
        .then(res => res.json())
        .then(allProducts => this.setState({ allProducts }));
    }

    // componentDidMount(){
    //   let url = 'http://localhost:8000/allProducts';
    //   Request.get(url)
    //   .then(res => res.json())
    //   .then(allProducts => this.setState({ allProducts }));
    // }
    addToCart(shoeId){
      let pickedProducts = this.state.selectedProducts.slice();
      
      pickedProducts.push(shoeId);
      this.setState({
        selectedProducts: pickedProducts
      })
    }
    purchasedProducts(){
      console.log(this.state.allProducts['shoeId'])
      for(let i = 0 ; i < this.state.allProducts.length;i++ ){
        if(this.state.allProducts[i]['ShoeId'] === this.state.selectedProducts[i]){
          console.log('hit')
          alert('er')
					this.state.allProducts.map(function(product){
            return(
              <div><figure>
              <h2>{product.Name}</h2>
              <img src={product.Image} alt="sd" className='images' />
              <figcaption>
                <p>{product.Description}</p>
                <p>Colorway: {product.Color}</p>
                <p>Price: ${product.Price}.00</p>
                <p>Category: {product.Category}</p>
              </figcaption>
            </figure>
            </div>
            )
          })
                
        
        }
      }
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
                <button type="button" onClick={() => this.addToCart(products.ShoeId)}>Add to Cart</button>
              </figcaption>
            </figure>
          </div>                            
        )}
        <h2>Cart</h2>
        <button type="button" onClick={() => this.purchasedProducts()}>View Cart</button>

        </div>
      )
    }
  }
  
  export default Products;