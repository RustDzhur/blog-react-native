import { StyleSheet, Text, View } from "react-native";
export const RegistrationScreen = () => {
	return (
		<View style={styles.registrationBox}>
			<Text style={styles.title}>Registration</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	registrationBox: {
		alignItems: "center",
	},
	title: {
		fontWeight: '500',
		fontSize: 30,
		lineHeight: 35,
		letterSpacing: "0.01em",

		color: "#212121",
	},
});
