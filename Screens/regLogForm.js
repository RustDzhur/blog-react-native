import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";

export const RegLogForm = ({ setIsShowKeyboard, isShowKeyboard }) => {
	const [formLayout, setFormLayout] = useState(true);
	const handleToggleForm = () => {
		setFormLayout(prevState => !prevState);
	};
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
						<Text onPress={handleToggleForm}>Have an account? Login</Text>
					) : (
						<Text onPress={handleToggleForm}>
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
});
