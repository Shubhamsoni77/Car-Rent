import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rentalService from "./rentalService";

const rentalSlice = createSlice({
    name : "rental",
    initialState : {
        rentals : [],
        userRental : {},
        rentalLoading : false,
        rentalSuccess : false,
        rentaError : false,
        rentalMessage : "",
    },

    reducers: {},

    extraReducers : (builder) => {

        builder
        .addCase(getRental.pending,(state, action) => {
            state.rentalLoading = true
            state.rentalSuccess = false
            state.rentaError = false
        })

        .addCase(getRental.fulfilled,(state, action) => {
            state.rentalLoading = false
            state.rentalSuccess = true
            state.rentals = action.payload
            state.rentaError = false
        })

        .addCase(getRental.rejected,(state, action) => {
            state.rentalLoading = false
            state.rentalSuccess = false
            state.rentaError = true
            state.rentalMessage = action.payload
        })


        .addCase(getUserRental.pending,(state, action) => {
            state.rentalLoading = true
            state.rentalSuccess = false
            state.rentaError = false
        })

        .addCase(getUserRental.fulfilled,(state, action) => {
            state.rentalLoading = false
            state.rentalSuccess = true
            state.rentals = action.payload
            state.rentaError = false
        })

        .addCase(getUserRental.rejected,(state, action) => {
            state.rentalLoading = false
            state.rentalSuccess = false
            state.rentaError = true
            state.rentalMessage = action.payload
        })

        

        .addCase(createNewRental.pending,(state, action) => {
            state.rentalLoading = true
            state.rentalSuccess = false
            state.rentaError = false
        })

        .addCase(createNewRental.fulfilled,(state, action) => {
            state.rentalLoading = false
            state.rentalSuccess = true
            state.userRental = action.payload
            state.rentalMessage = "Booking Complete"
            state.rentaError = false
        })

        .addCase(createNewRental.rejected,(state, action) => {
            state.rentalLoading = false
            state.rentalSuccess = false
            state.rentaError = true
            state.rentalMessage = action.payload
        })
    }
})

export default rentalSlice.reducer

// Get Admin Rental
export const getRental = createAsyncThunk('GET/RENTALS', async(_,thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
       
    try {
        return rentalService.rentals(token)     
    } catch (error) {
       console.log(error);
       const message = response.error.data.message
       return thunkAPI.rejectWithValue(message)
        
    }
})

// Get User Rental
export const getUserRental = createAsyncThunk("RENTAL/USER", async(_, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token    

// console.log(token);
return rentalService.userRental(token)
})


// Create User New Rental
export const createNewRental = createAsyncThunk("CREATE/RENTAL", async(formData,thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    console.log(formData,token);
    
    return rentalService.addRental(formData,token)
})

