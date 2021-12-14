import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserTransactions } from '../../actions/TransactionActions'
import PropTypes from 'prop-types';
import Section from '../Section';
import ProductCard from '../ProductCard';

class BuyAgain extends Component {

  state = {
    isLoaded: false,
    products: {}
  }

  componentDidMount(){
    const products = {};

    this.props.fetchUserTransactions(this.props.user.uid)
    .then(res => {
      return Object.keys(this.props.transactions).map(transaction => {
        return Object.keys(this.props.transactions[transaction].items).map(item => {
          products[item] = this.props.transactions[transaction].items[item]
          return this.setState({ products: products })
        })
      })
    })
    .then(() => {
      this.setState({ isLoaded: true });
    })
  }

  renderProducts() {
    let used = [];
    return Object.keys(this.state.products).map(product => {
      let { title, thumbnail, image, tags, description, price, uid } = this.state.products[product]
      
      if (image && title && !used.includes(title) && used.length < 6){
        used.push(title);
        return (
          <ProductCard
            key={product}
            title={title}
            image={thumbnail || image}
            url={`/product/${uid}`}
            tags={tags}
            description={description}
            id={product}
            price={price}
          />
        );
      } else {
        return null
      }
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

BuyAgain.propTypes = {
  products: PropTypes.object
}

export default connect((state, ownProps) => ({
  products: state.products,
  transactions: state.transactions,
  user: state.user
}), { fetchUserTransactions })( BuyAgain );
