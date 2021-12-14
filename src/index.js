import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./utils/loadState";
import ScrollToTop from "./utils/ScrollToTop";
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import { StripeProvider, Elements } from "react-stripe-elements";
const persistedState = loadState();
const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});
// "pk_test_51Ho6laIcN0GAtZSeQNpjJ46dqqPTpUonBkm3XqtmLiohcMz4abv5oS831LH5miworNPiPtkJhiRZCJEOYRE1A9Om00XyxrxBCc"
ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
      <Elements>
        <BrowserRouter>
          <Router history={history}>
            <ScrollToTop>
              <App />
            </ScrollToTop>
          </Router>
        </BrowserRouter>
      </Elements>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
