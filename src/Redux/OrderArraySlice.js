import { createSlice } from "@reduxjs/toolkit";
export const OrderArraySlice = createSlice({
  name: "OrderArray",
  initialState: {
    totalCost: 0,
    OrderArray: [],
  },
  reducers: {
    Addmenuitem: (state, action) => {
      // console.log(`Action payload for add menu: ${action.payload}`);
      const index = state.OrderArray.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index > -1) {
        const updatedcart = [...state.OrderArray];
        updatedcart[index].quantity += action.payload.quantity;
        console.log("Updated cart:", updatedcart);
        state.OrderArray = updatedcart;
        console.log("Item already exits! so adding quantity.");
        var total = action.payload.quantity * action.payload.price;
        state.totalCost += total;
      } else {
        state.OrderArray.push(action.payload);
        total = action.payload.quantity * action.payload.price;
        state.totalCost += total;
        console.log("Item doesn't exist, so adding!");
      }
    },
    Updatemenuitem: (state, action) => {
      console.log("Came for updatemenuitem:", action.payload);
      // const index = cartitems.findIndex((item) => item.name === itemname);
      const index = state.OrderArray.findIndex(
        (item) => item.name === action.payload
      );
      const newitems = [...state.OrderArray];
      // console.log(`On index ${index} the item is ${newitems[index]}`);
      var reduce = newitems[index].quantity * newitems[index].price;
      state.totalCost -= reduce;
      console.log("Quantity of the index deleted:", newitems[index].quantity);
      console.log("Price of the index deleted:", newitems[index].price);
      newitems.splice(index, 1);
      state.OrderArray = newitems;
      console.log(`Index of ${action.payload} is ${index}`);
    },
  },
});
export const { Addmenuitem, Updatemenuitem } = OrderArraySlice.actions;
export default OrderArraySlice.reducer;
