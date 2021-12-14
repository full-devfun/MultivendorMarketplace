import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/ProductActions';
import PropTypes from 'prop-types';
import Section from './Section';
import ProductCard from './ProductCard';

class FeaturedProducts extends Component {

  state = {
    isLoaded: false,
  }

  componentDidMount(){
    this.props.fetchProducts()
    .then(() => {
      this.setState({ isLoaded: true });
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderProducts() {
    return Object.keys(this.props.products).slice(0,6).map(product => {
      return (
        <ProductCard
          key={product}
          title={this.props.products[product].title}
          image={this.props.products[product].image}
          url={`/product/${product}`}
          tags={this.props.products[product].tags}
          description={this.props.products[product].description}
          id={product}
          price={this.props.products[product].price}
        />
      )
    })
  }

  render() {

    return (
      <Section title='Featured Products' columns={3}>
        {this.state.isLoaded
          ? this.renderProducts()
          : null
        }
      </Section>
    );
  }

}

FeaturedProducts.propTypes = {
  products: PropTypes.object
}

export default connect((state, ownProps) => ({
  products: state.products,
}), { fetchProducts })( FeaturedProducts );
