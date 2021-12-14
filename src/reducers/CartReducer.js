import { FETCH_CART, CLEAR_CART } from "../actions/CartActions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;
    case CLEAR_CART:
      return []
    default:
      return state;
  }
}
