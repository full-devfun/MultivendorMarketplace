import axios from "axios";

axios.defaults.baseURL = (function () {
  switch (process.env.NODE_ENV) {
    case "development":
      return process.env.REACT_APP_LOCAL_HOST;
    case "staging":
      return process.env.REACT_APP_STAGING_URL;
    case "production":
      return process.env.REACT_APP_PRODUCTION_URL;
    default:
      return process.env.REACT_APP_LOCAL_HOST;
  }
})();
