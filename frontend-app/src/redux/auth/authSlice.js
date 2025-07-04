import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state){
            state.error
        },
        loginSuccess(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export const { login, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;