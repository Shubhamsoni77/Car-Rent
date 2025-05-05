import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carservice from "./carService";

const carSlice = createSlice({
    name : "car",
    initialState : {
        cars : [],
        car : {},
        edit : { car : {} , isEdit : false },
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "",
        currentPage : 1,
        totalPages  : 1,
        totalItem  : 0,
    },
    reducers : {

        editCar : (state , action) => {
            console.log(action.payload);
            
            return {
                ...state, 
                edit : { car : action.payload, isEdit : true }
            }
        }

    },
 
    extraReducers : (builder) => {

        builder
        .addCase(getCars.pending,(state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(getCars.fulfilled,(state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cars = action.payload.cars || []
            state.isError = false
            state.totalPages  = action.payload?.pagination?.pages;
            state.currentPage  = action.payload?.pagination?.page;
        })

        .addCase(getCars.rejected,(state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(getUserCar.pending,(state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(getUserCar.fulfilled,(state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.car = action.payload
            state.isError = false
        })

        .addCase(getUserCar.rejected,(state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


        .addCase(findUserCar.pending,(state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(findUserCar.fulfilled,(state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cars = action.payload
            state.isError = false
        })

        .addCase(findUserCar.rejected,(state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


        .addCase(removeCar.pending,(state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(removeCar.fulfilled,(state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cars = state.cars.filter((item) => item._id !== action.payload.id )
            state.isError = false
        })

        .addCase(removeCar.rejected,(state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


        .addCase(addCar.pending,(state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(addCar.fulfilled,(state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = 'Car is Added'
            state.isError = false
        })

        .addCase(addCar.rejected,(state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


    }

})

export const {editCar} = carSlice.actions
export default carSlice.reducer

// Get Cars 
export const getCars = createAsyncThunk('FETCH/CAR', async({page,limit}, thunkAPI) => {
    try {
        return carservice.fetchCars(page,limit)       
    } catch (error) {
        console.log(error);
        
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

    
// export const getCars = createAsyncThunk('FETCH/CAR', async ({ page = 1, limit = 10 } = {}, thunkAPI) => {
//     try {
//       return await carservice.fetchCars(page, limit);
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   });
  



// Add car : only admin

export const addCar = createAsyncThunk("ADD/CAR" , async(formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    
    return await carservice.carAdding(formData, token)
    
})

export const getUserCar = createAsyncThunk('GETCAR/USER', async(id, thunkAPI) => {
    try {
        return carservice.getCar(id)
        
    } catch (error) {
       const message = error.response.data.message
       return thunkAPI.rejectWithValue(message) 
    }
})

export const findUserCar = createAsyncThunk("SEARCH/CAR",async(input, thunkAPI) => {
    try {
        return await carservice.searchCar(input)        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


export const removeCar = createAsyncThunk("DELETE/CAR", async(id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    return await carservice.deleteCar(id, token)
})


export const updateCarDetails = createAsyncThunk("UPDATE/CAR", async(formData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    

    return await carservice.updateCar(formData, token)
})