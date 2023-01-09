import { createSlice } from "@reduxjs/toolkit";
import { signIn, createNewUser } from "./authOperations";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		userId: null,
		userName: null,
		isAuth: false,
	},
	extraReducers: builder => {
		builder
			.addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload)
				state.isAuth = true;
			})
			.addCase(createNewUser.fulfilled, (state, action) => {
        console.log(action.payload)
				state.isAuth = true;
			});
	},
});
