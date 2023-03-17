import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "../Redux/OrderArraySlice";
import Menuavailablereducer from "./Menuavailablereducer";
import OrderConfigSlice from "./OrdercofigSlice";
export default configureStore(
  {
    reducer: {
      Orderarray: OrderReducer,
      Orderconfig: OrderConfigSlice,
      MenuFetcher: Menuavailablereducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
