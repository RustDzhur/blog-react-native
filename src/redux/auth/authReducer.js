import { createSlice } from "@reduxjs/toolkit";
import { signIn, createNewUser } from "./authOperations";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		userId: null,
		userName: null,
	},
	extraReducers: builder => {
		builder
			.addCase(signIn.fulfilled, (state, action) => ({
				...state,
				userId: action.payload.uid,
			}))
			.addCase(createNewUser.fulfilled, (state, action) => ({
				...state,
				userId: action.payload.uid,
				userName: action.payload.displayName,
			}))

	},
});
