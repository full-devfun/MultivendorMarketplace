import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTaggedProducts } from '../actions/ProductActions';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import Section from '../components/Section';
import ShopSidebar from '../components/ShopSidebar';
import { isBrowser } from 'react-device-detect';
import Loader from '../components/Loader';
import { device } from '../utils/devices';

const Wrapper = styled.div`
  padding-top: calc(2rem + 33px);

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: 1fr 6fr;
    padding: calc(4rem + 33px) 0 0;
  }
`;

class Tag extends Component {

  state = {
    products: [],
    isLoaded: false,
  }

  componentDidMount(){
    this.props.fetchTaggedProducts(this.props.match.params.tag)
    .then((res) => {
      this.setState({ products: res, isLoaded: true });
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.tag !== prevProps.match.params.tag){
      this.props.fetchTaggedProducts(this.props.match.params.tag)
      .then((res) => {
        this.setState({ products: res, isLoaded: true });
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  renderProducts() {
    return Object.keys(this.state.products).map(product => {
      return (
        <ProductCard
          key={product}
          title={this.state.products[product].title}
          image={this.state.products[product].image}
          url={`/product/${product}`}
          tags={this.state.products[product].tags}
          id={product}
        />
      )
    })
  }

  render() {

    return (
      <Wrapper>
        {isBrowser
          ? <ShopSidebar />
          : null
        }
        <Section columns={4} title={this.props.match.params.tag}>
          {this.state.isLoaded
            ? this.renderProducts()
            : <Loader />
          }
        </Section>
      </Wrapper>
    );
  }

}

Tag.propTypes = {
  products: PropTypes.object
}

export default connect((state, ownProps) => ({
  products: state.products,
}), { fetchTaggedProducts })( Tag );
