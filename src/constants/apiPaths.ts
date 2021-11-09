const api = process.env.REACT_APP_API;
const importApi = process.env.REACT_APP_API_IMPORT;
const cartApi = process.env.REACT_APP_CART_API;
const bffApi = process.env.REACT_APP_BFF_API;

const API_PATHS = {
  products: `${api}/products`,
  product: `${api}/product/{id}`,
  import: `${importApi}/import`,
  cart: `${cartApi}/api`,
  bff: bffApi,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
