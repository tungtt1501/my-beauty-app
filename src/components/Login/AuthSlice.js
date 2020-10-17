import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../api/AuthApi";

export const login = createAsyncThunk('users/login', async (data) => {
    const user = await AuthApi.login(data);
    return user;
})

var initialState = {
    isAuthUser: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    status: 'idle',
    error: null
}

const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.clear("user");
            state.isAuthUser = false;
            state.user = null;
            state.error = null;
            state.status = 'idle';
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = 'loading'
        },
        [login.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [login.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            if (!action.payload.error) {
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                state.isAuthUser = true;
                state.user = action.payload.user;
            } else {
                state.isAuthUser = false;
                state.user = null;
                state.error = action.payload.error;
            }
        },
    }
});

const { reducer, actions } = auth;
export const { logout } = actions;
export default reducer;