import { authFirebase } from "../../firebase/config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "react-native-root-toast";

export const createNewUser = createAsyncThunk(
	"user/createNewUser",
	async (data, thunkAPI) => {
		try {
			createUserWithEmailAndPassword(
				authFirebase,
				data.changeEmail,
				data.changePassword
			)
				.then(userCredential => {
					// Signed in
					const user = userCredential.user;
					Toast.show("Succsess register", {
						duration: 500,
						position: 50,
					});
          //for updating User Info
					thunkAPI.dispatch(
						updateProfile(authFirebase.currentUser, {
							displayName: data.changeName,
							userId: user.uid,
						})
					);
					return user;
				})
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;
					Toast.show(errorMessage, {
						duration: 500,
						position: 50,
					});
				});
		} catch (error) {
			thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const signIn = createAsyncThunk(
	"user/signIn",
	async (data, thunkAPI) => {
		try {
			signInWithEmailAndPassword(
				authFirebase,
				data.changeEmail,
				data.changePassword
			)
				.then(userCredential => {
					// Signed in
					const user = userCredential.user;
					Toast.show("Succsess signin", {
						duration: 500,
						position: 50,
					});
					return user;
				})
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;
					Toast.show(errorMessage, {
						duration: 500,
						position: 50,
					});
				});
		} catch (error) {
			thunkAPI.rejectWithValue(error.message);
		}
	}
);