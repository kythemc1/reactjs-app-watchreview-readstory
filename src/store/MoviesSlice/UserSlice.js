import {  createSlice } from "@reduxjs/toolkit";


// get netflix data


const UserSlice = createSlice({
    name: "userInfo",
    initialState: {
        UserName: null,
        Password: null,

    },

    reducers: {
        setUserInfo: (state, action) => {
            state.UserName = action.payload;
            state.Password = action.payload;
        },
    },
    //
    // extraReducers: {
    //
    // },
});

const { reducer, actions } = UserSlice;
export const { setUserInfo } = actions;
export default reducer;
