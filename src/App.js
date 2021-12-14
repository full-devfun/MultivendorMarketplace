import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import Header from "./components/Header";
import Loader from "./components/Loader";
import useAuth from "./hooks/useAuth";
import SignedIn from "./pages/SignedIn";
import "./utils/axiosDefaults";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Shop = lazy(() => import("./pages/Shop"));
const Category = lazy(() => import("./pages/Category"));
const Tag = lazy(() => import("./pages/Tag"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Cart = lazy(() => import("./pages/Cart"));
const Account = lazy(() => import("./pages/Account"));
const Producer = lazy(() => import("./pages/Producer"));
const Producers = lazy(() => import("./pages/Producers"));
const Orders = lazy(() => import("./pages/Orders"));
const Following = lazy(() => import("./pages/Following"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const PurchaseConfirmation = lazy(() => import("./pages/PurchaseConfirmation"));
const Terms = lazy(() => import("./pages/Terms"));
// const Privacy = lazy(() => import('./pages/PrivacyPolicy'))
const FAQ = lazy(() => import("./pages/FAQ"));

const theme = {
  // Type
  body: "Times Now",
  headline: "Canela",
  sans: "Aktiv Grotesk",

  // Colors
  primary: "rgb(255,238,147)",
  secondary: "rgb(54,33,62)",
  highlight: "rgb(255,192,159)",
  border: "rgb(54,33,62,0.15)",
  bg: "rgb(241, 239, 241)",
};

const App = (props) => {
  const { initializing, userData } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {!initializing ? (
          <>
            <Header />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path="/" component={userData ? Dashboard : Home} />
                <Route path="/product/:id/:producer" component={Product} />
                <Route path="/product/:id" component={Product} />
                <Route path="/shop" component={userData ? Shop : SignedIn} />
                <Route path="/tag/:tag" component={Tag} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/register" component={Register} />
                <Route path="/category/:cat" component={Category} />
                <Route path="/about" component={About} />
                <Route path="/producers/" component={Producers} />
                <Route path="/producer/:uid" component={Producer} />
                <Route path="/cart" component={Cart} />
                <Route
                  path="/terms"
                  render={(props) => <Terms {...props} privacyPolicy={false} />}
                />
                <Route
                  path="/privacy-policy"
                  render={(props) => <Terms {...props} privacyPolicy={true} />}
                />
                <Route path="/faq" component={FAQ} />
                <Route path="/orders" component={Orders} />
                <Route path="/account" component={Account} />
                <Route path="/following" component={Following} />
                <Route
                  path="/purchase-confirmation/:id"
                  component={PurchaseConfirmation}
                />
              </Switch>
            </Suspense>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </ThemeProvider>
  );
};

export default connect((state, ownProps) => ({
  user: state.user,
}))(App);
