import { GET_CARDS, SET_SELECTED } from "../actions/CardActions";
import { CLEAR_CARDS } from "../actions/UserActions";

export default function (
  state = {
    cards: {},
    selected: { label: "addNew", value: {} },
    loading: true,
  },
  action
) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };

    case CLEAR_CARDS:
      return {
        cards: {},
        selected: { label: "addNew", value: {} },
        loading: true,
      };
    default:
      return state;
  }
}
