import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterslice";
import { movieReducer } from "./MovieSlice";

let store=configureStore({

reducer:{
counter:counterReducer,
movie:movieReducer,

}

})

export default store;