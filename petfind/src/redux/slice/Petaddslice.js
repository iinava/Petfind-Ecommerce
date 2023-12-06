import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const petadd = createAsyncThunk('petadd', async (formData) => {
    const response = await axios.post("http://127.0.0.1:8000/api/addpet", formData)
    return response
})

const initialState = {
    data: [],
    loading: false,
    error: false
}


export const petaddslice = createSlice({
    name: "petadd",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(petadd.pending,(state)=>{
            state.loading=true
        })
    
        builder.addCase(petadd.fulfilled,(state,action)=>{
            state.loading=false
            state.productData=action.payload
        })
        builder.addCase(petadd.rejected,(state,action)=>{
            state.loading=false
            state.error=true
        })
    }

})