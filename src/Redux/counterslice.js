import { createSlice } from "@reduxjs/toolkit";

let initialState={counter:0}
let counterslice=createSlice({

name:"counter",
initialState:initialState,
reducers:{
increase:(state)=>{state.counter+=1},
decrease:(state)=>{state.counter-=1},
test:(state,action)=>{
  
    state.counter+=action.payload;
},
}

})

export let counterReducer=counterslice.reducer;
export let {increase,decrease,test}=counterslice.actions;