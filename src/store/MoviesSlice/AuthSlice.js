import {  createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "authInfo",
    initialState: {
        isLogged: null,
        accessToken: null,
        refreshToken: null,
        isShowModalUser: false,
        username: null,
        password: null,
        roles:[],
    },

    reducers: {
        setAuth: (state, action) => {
            state.isLogged = action.payload;
            state.accessToken = action.payload;
            state.username =  action.payload;
            state.password = action.payload;
            state.refreshToken = action.payload;
        },
        setShowModalUser:(state,action)=>{
            state.isShowModalUser = action.payload;
        }
    },

    // extraReducers: {
    //
    // },
});

const { reducer, actions } = AuthSlice;
export const { setShowModalUser ,setAuth} = actions;
export default reducer;
