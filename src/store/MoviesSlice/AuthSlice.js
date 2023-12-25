import {  createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "authInfo",
    initialState: {
        isLogged: false,
        accessToken: null,
        refreshToken: null,
        isShowModalUser: false,
        username: null,
        password: null,
        roles:[],
    },

    reducers: {
        setAuth: (state, action) => {
            state.username =  action.payload;
            state.password = action.payload;
            state.accessToken = action.payload;
            state.refreshToken = action.payload;
            state.roles = action.payload;
        },
        setShowModalUser:(state,action)=>{
            state.isShowModalUser = action.payload;
        },
        setLogged:(state,action)=>{
            state.isLogged = action.payload;
        }
    },

    // extraReducers: {
    //
    // },
});

const { reducer, actions } = AuthSlice;
export const { setShowModalUser ,setAuth,setLogged} = actions;
export default reducer;
