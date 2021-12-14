import React, { Component } from 'react'
import Rate from "antd/lib/rate";
import Icon from "antd/lib/icon";
import Divider from "antd/lib/divider";
import { fetchProductRatings } from '../actions/ProductActions'
import Moment from 'react-moment'
import { ReactComponent as Logo } from '../components/leaf.svg'

class ProductRatings extends Component {

  state = {
    isLoaded: false,
    ratings: []
  }

  componentDidMount(){
    const { producer, product } = this.props;
    fetchProductRatings(producer, product)
    .then(ratings => {
      this.setState({ ratings: ratings, isLoaded: true })
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.producer !== this.props.producer){
      const { producer, product } = this.props;
      fetchProductRatings(producer, product)
      .then(ratings => {
        this.setState({ ratings: ratings })
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        {this.state.isLoaded &&
          this.state.ratings.length > 0
            ?
              <>
                {this.state.ratings.map(rating => (
                  <div>
                    <p><strong>{rating.user.displayName}</strong> &nbsp; <Moment unix fromNow>{rating.createdAt.seconds}</Moment> &nbsp; <Rate character={<Icon component={Logo}/>} disabled={true} value={rating.rating} /></p>
                    <p>{rating.comment}</p>
                    <Divider />
                  </div>
                ))}
              </>
            :
              <p>No reviews yet</p>
        }
      </div>
    );
  }

}

export default ProductRatings;
