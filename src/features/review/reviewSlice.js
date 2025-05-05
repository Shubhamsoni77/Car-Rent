import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewService from "./reviewService";

const reviewSlice = createSlice({
        name : 'review',
        initialState : {
            review : [],
            reviewLoading : false,
            reviewSuccess : false,
            reviewError : false,
            reviewMessage : ""
        },  

        reducers : {},

        extraReducers : (builder) => {
            builder 
            .addCase(getReview.pending, (state, action) => {
                state.reviewLoading = true
                state.reviewSuccess = false
                state.reviewError = false
            })

            .addCase(getReview.fulfilled, (state, action) => {
                state.reviewLoading = false
                state.reviewSuccess = true
                state.review = action.payload
                state.reviewError = false
            })

            .addCase(getReview.rejected, (state, action) => {
                state.reviewLoading = false
                state.reviewSuccess = false
                state.reviewError = true
                state.reviewMessage = action.payload
            })


            .addCase(getUserReview.pending, (state, action) => {
                state.reviewLoading = true
                state.reviewSuccess = false
                state.reviewError = false
            })

            .addCase(getUserReview.fulfilled, (state, action) => {
                state.reviewLoading = false
                state.reviewSuccess = true
                state.review = action.payload
                state.reviewError = false
            })

            .addCase(getUserReview.rejected, (state, action) => {
                state.reviewLoading = false
                state.reviewSuccess = false
                state.reviewError = true
                state.reviewMessage = action.payload
            })
        }
})

export default reviewSlice.reducer

// admin Review
export const getReview = createAsyncThunk('GET/REVIEW', async(_, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token
    // console.log(token);
    
    return await reviewService.fetchReview(token)
})

export const getUserReview = createAsyncThunk("USER/REVIEW", async(id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    console.log('run');
    
    
    return reviewService.userReview(id,token)
})

export const addUserReview = createAsyncThunk("ADD/REVIEW",async(formData,thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    
    return reviewService.addReview(formData,token)
})
