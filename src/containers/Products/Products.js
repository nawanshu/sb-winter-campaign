import React, { Component } from 'react';

import ProductList from 'data/products.json';
import Product from  'components/Product/Product';

class Products extends Component {
    
    state = {
        products:  []
    }

    componentDidMount () {
        this.getProducts();
    }

    getProducts () {
        let products = [...this.state.products];
        products = ProductList;
        this.setState({products: products});
    }

    render () {
        return (
            <section>
                {
                    this.state.products.map(product => {
                        return <Product key={product.type} productInfo={product} />
                    }) 
                }
            </section>
        );
    }
}

export default Products;
