import { FETCH_ORDER } from '../actions/OrderActions';

export default function( state = {}, action) {
  switch(action.type) {
    case FETCH_ORDER:
      return action.payload;
    default:
      return state;
  }
}
