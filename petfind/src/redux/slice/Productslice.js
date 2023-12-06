import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productList =createAsyncThunk('productList',async()=>{
    try {
        const response= await axios.get("http://127.0.0.1:8000/api/allpetview")
        return response.data.data
        
    } catch (error) {
        
    }
   
})

const initialState={
  productData:[],
  loading:false,
  error:false
}

export const productslice=createSlice({
name:"product",
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(productList.pending,(state)=>{
        state.loading=true
    })

    builder.addCase(productList.fulfilled,(state,action)=>{
        state.loading=false
        state.productData=action.payload
    })
    builder.addCase(productList.rejected,(state,action)=>{
        state.loading=false
        state.error=true
    })
}
})





export default productslice.reducer