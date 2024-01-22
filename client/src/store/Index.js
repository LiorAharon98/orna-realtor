import { configureStore, createSlice } from "@reduxjs/toolkit";
const propertyInitialState = 
    {allProperty : []}
;
const propertySlice = createSlice({
  name: "allProperty",
  initialState: propertyInitialState,
  reducers: {
    getProperty(state, action) {
      state.allProperty = action.payload
    },
    deleteProperty(state, action) {
      state.allProperty = action.payload
    },
    editPropertyPrice(state, action) {
      state.allProperty = action.payload
    },
  },
});

const store = configureStore({
  reducer: {
    property: propertySlice.reducer,
  },
});

export const propertyAction = propertySlice.actions;

export default store;
