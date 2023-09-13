import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterslice";
import { movieReducer } from "./MovieSlice";
import favoriteslice from "./favorite";
let store=configureStore({

reducer:{
counter:counterReducer,
movie:movieReducer,
favorite:favoriteslice,
}

})

export default store;