import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchmealType } from "../../services/Allproduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const mealfetch=createSlice({
    name: "mealfetch",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchSearchmealType.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchSearchmealType.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchSearchmealType.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default mealfetch.reducer;