import React, { Component } from 'react';
import ProductData from '../data.json';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  state = {
    productList: ProductData.data,
    productSearch:""
  };

  productHandler = (getSearchInput) => {
      this.setState({
          productSearch: getSearchInput
      })
  }
//   getSearch

  render() {

    const products = this.state.productList.filter(product => {        
        const x = product.name.match(/this.state.productSearch/i)
        console.log(x)
    })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {this.state.productList.map((product, i) => 
              <tr key={i}>
                <ProductRow 
                    name={product.name}
                    price={product.price} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
