import { configureStore, createSlice } from "@reduxjs/toolkit";
const propertyInitialState = { allProperty: [], sortedProperty: [] };
const modalInitialState = {
  toggleModal: false,
};
const userInitialState = {
  isLoggedIn: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    toggleOn(state) {
      state.toggleModal = true;
    },
    toggleOf(state) {
      state.toggleModal = false;
    },
  },
});
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    logged(state) {
      state.isLoggedIn = true;
    },
  },
});
const propertySlice = createSlice({
  name: "allProperty",
  initialState: propertyInitialState,
  reducers: {
    getProperty(state, action) {
      state.allProperty = action.payload;
    },
    deleteProperty(state, action) {
      state.allProperty = action.payload;
    },
    editPropertyPrice(state, action) {
      state.allProperty = action.payload;
    },
    sortedProperty(state, action) {
      state.sortedProperty = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    property: propertySlice.reducer,
    modal: modalSlice.reducer,
    user: userSlice.reducer,
  },
});

export const propertyAction = propertySlice.actions;
export const modalAction = modalSlice.actions;
export const userAction = userSlice.actions;

export default store;
