import React, { Component } from 'react';

class Header extends Component {
    render() {
      const  name  = "IC Sporting Goods";
      return (
          <div className='Header' >
						<h1>{name}</h1>
					</div>
      )
    }
  }
  
  export default Header;