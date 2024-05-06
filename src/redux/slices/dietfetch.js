import { createSlice } from "@reduxjs/toolkit";
import { fetchDietLabel } from "../../services/Allproduct";
const initialState={
    data:null,
    loading: false,
    error:null,
    };
    
const dietfetch=createSlice({
    name: "dietfetch",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchDietLabel.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchDietLabel.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchDietLabel.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default dietfetch.reducer;