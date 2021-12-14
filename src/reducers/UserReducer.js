export default function (
  state = {
    loggedIn: false,
    selectedCard: "addNew",
    selectedAddress: { value: "Select Address", label: "Select Address" },
  },
  action
) {
  switch (action.type) {
    case "login_user":
      if (action.payload) {
        return { ...state, loggedIn: true, ...action.payload };
      } else {
        return state;
      }
    case "logout_user":
      return { loggedIn: false };
    case "set_selected_card":
      return { ...state, selectedCard: action.payload };
    case "set_selected_address":
      return { ...state, selectedAddress: action.payload };

    default:
      return state;
  }
}
