import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const useExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : useExist || null ,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "",
    },

    reducers : {},

    extraReducers : (builder) => {

        builder
        .addCase(registerUser.pending , (state,action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(registerUser.fulfilled , (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = "Register Successfully"
            state.user = action.payload 
            state.isError = false
        })

        .addCase(registerUser.rejected , (state,action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


        .addCase(loginUser.pending , (state,action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

        .addCase(loginUser.fulfilled , (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = 'Login Successfull'
            state.user = action.payload 
            state.isError = false
        })

        .addCase(loginUser.rejected , (state,action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


        .addCase(logOutUser.fulfilled , (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = null
            state.isError = false
            state.message = "LogOut Successfull"
        })

    }
})

export default authSlice.reducer

export const registerUser = createAsyncThunk("REGISTER/AUTH", async(fromData, thunkAPI) => {
    try {

      return authService.register(fromData)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


export const loginUser = createAsyncThunk('LOGIN/AUTH', async(formData,thunkAPI) => {
    try {

    return await authService.login(formData)    
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


export const logOutUser = createAsyncThunk('LOGOUT/AUTH', () => {
    localStorage.removeItem('user')
})
