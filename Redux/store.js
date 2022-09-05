import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./CardSlice";

export default configureStore({
    reducer: {
        cart: cardReducer,
    },
});