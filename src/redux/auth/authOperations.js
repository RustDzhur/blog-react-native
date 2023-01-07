import { authFirebase } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewUser = createAsyncThunk(
	"user/createNewUser",
	async (data, thunkAPI) => {
    try {
      createUserWithEmailAndPassword(authFirebase, data.changeEmail, data.changePassword)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }

	}
);

export const signIn = createAsyncThunk (
  'user/signIn',
  async (data, thunkAPI) => {
    try {
      signInWithEmailAndPassword(authFirebase, data.changeEmail, data.changePassword)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }

	}
)
