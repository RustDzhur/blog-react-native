import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";

export const RegLogForm = ({ setIsShowKeyboard, isShowKeyboard }) => {

	return (
		<View style={styles.changeForm}>
			{formLayout ? (
				<RegistrationScreen setIsShowKeyboard={setIsShowKeyboard} />
			) : (
				<LoginScreen setIsShowKeyboard={setIsShowKeyboard} />
			)}
			{!isShowKeyboard && (
				<View>
					{formLayout ? (
						<Text style={{...styles.text, fontFamily: 'RobotoRegular'}} onPress={handleToggleForm}>Have an account? Login</Text>
					) : (
						<Text style={{...styles.text, fontFamily: 'RobotoRegular'}} onPress={handleToggleForm}>
							Don't have an account? Register
						</Text>
					)}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	changeForm: {
		alignItems: "center",
	},
	text: {
		fontSize: 16,
		lineHeight: 19,
		color: '#1B4371',
	}
});
