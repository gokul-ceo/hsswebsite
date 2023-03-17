import { createSlice } from "@reduxjs/toolkit";
export const OrderConfigSlice = createSlice({
  name: "OrderConfig",
  initialState: {
    Ordermode: "takeaway",
    Paymentmode: "",
    Paymentintiated: false,
    Showcontactform: false,
    submited: false,
  },
  reducers: {
    CHOOSE_ORDER_MODE: (state, action) => {
      state.Ordermode = action.payload;
    },
    CHOOSE_PAYMENT_MODE: (state, action) => {
      state.Paymentmode = action.payload;
    },
    INFO_PAYMENTINTIATED: (state) => {
      if (state.Paymentintiated) {
        state.Paymentintiated = false;
      } else {
        state.Paymentintiated = true;
      }
    },
    SHOW_CONTACT_FORM: (state) => {
      state.Showcontactform
        ? (state.Showcontactform = false)
        : (state.Showcontactform = true);
    },
    CLOSE_ALERT: (state) => {
      state.submited ? (state.submited = false) : (state.submited = true);
    },
  },
});
export const {
  CHOOSE_ORDER_MODE,
  CHOOSE_PAYMENT_MODE,
  SHOW_CONTACT_FORM,
  INFO_PAYMENTINTIATED,
  CLOSE_ALERT,
} = OrderConfigSlice.actions;
export default OrderConfigSlice.reducer;
