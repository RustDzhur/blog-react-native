import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";

export const RegLogForm = () => {
	const [formLayout, setFormLayout] = useState(true);
	const handleToggleForm = () => {
		setFormLayout(prevState => !prevState);
	};
	return (
		<View style={styles.changeForm}>
			{formLayout ? <RegistrationScreen /> : <LoginScreen />}
			{formLayout ? (
				<Text onPress={handleToggleForm}>Have an account? Login</Text>
			) : (
				<Text onPress={handleToggleForm}>Don't have an account? Register</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	changeForm: {
		alignItems: "center",
	},
});
