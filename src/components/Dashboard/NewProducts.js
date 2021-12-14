import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/ProductActions';
import PropTypes from 'prop-types';
import Section from '../Section';
import ProductCard from '../ProductCard';

class NewProducts extends Component {

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
    let data = Object.values(this.props.products);
    data.sort(function(a, b) {
      let num1 = a.createdAt;
      let num2 = b.createdAt;
      return (num1 < num2) ? 1 : (num1 > num2) ? -1 : 0;
    });

    return Object.values(data).filter((item) => {
      if (item.producers && item.producers.length > 0){
        return true
      }
      return false
    }).slice(0,6).map(product => {
      return (
        <ProductCard
          key={product.id}
          title={product.title}
          image={
            product.thumbnail || product.image
          }
          url={`/product/${product.id}`}
          tags={product.tags}
          description={product.description}
          id={product.id}
          price={product.price}
        />
      );
    })
  }

  render() {

    return (
      <Section title={this.props.title} leftTitle columns={6}>
        {this.state.isLoaded
          ? this.renderProducts()
          : null
        }
      </Section>
    );
  }

}

NewProducts.propTypes = {
  products: PropTypes.object
}

export default connect((state, ownProps) => ({
  products: state.products,
}), { fetchProducts })( NewProducts );
