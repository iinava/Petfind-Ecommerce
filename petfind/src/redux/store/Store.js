const { configureStore } = require("@reduxjs/toolkit");
import productReducer from "../slice/Productslice";

export const store =configureStore({
    reducer:{
        product:productReducer,

    },
})