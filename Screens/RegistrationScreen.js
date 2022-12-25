import { useState } from "react";
import { useFonts } from "expo-font";
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export const RegistrationScreen = ({ setIsShowKeyboard }) => {
	const [changeName, setChangeName] = useState("");
	const [changeEmail, setChangeEmail] = useState("");
	const [changePassword, setChangePassword] = useState("");

	const [loaded] = useFonts({
		RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!loaded) {
		return null;
	}

	const handleChangeValue = () => {
		console.log(
			"Name: " +
				changeName +
				"\n" +
				"Email: " +
				changeEmail +
				"\n" +
				"Password: " +
				changePassword
		);
	};
	return (
		<View style={styles.regContainer}>
			<Text style={{ ...styles.title, fontFamily: "RobotoMedium" }}>
				Registration
			</Text>
			<View style={styles.form}>
				<View style={styles.inputBox}>
					<TextInput
						style={{ ...styles.input, fontFamily: "RobotoRegular" }}
						textAlign={"left"}
						placeholder={"Name"}
						onFocus={() => setIsShowKeyboard(true)}
						onChangeText={setChangeName}
					/>
				</View>
				<View style={styles.inputBox}>
					<TextInput
						style={{ ...styles.input, fontFamily: "RobotoRegular" }}
						textAlign={"left"}
						placeholder={"Email address"}
						onFocus={() => setIsShowKeyboard(true)}
						onChangeText={setChangeEmail}
					/>
				</View>
				<View>
					<TextInput
						style={{ ...styles.input, fontFamily: "RobotoRegular" }}
						textAlign={"left"}
						plnpx expo install react-native-screens react-native-safe-area-contextaceholder={"Password"}
						secureTextEntry={true}
						placeholder={"Passwo"}
						onFocus={() => setIsShowKeyboard(true)}
						onChangeText={setChangePassword}
					/>
				</View>
				<TouchableOpacity activeOpacity={0.6} onPress={handleChangeValue}>
					<View style={styles.button}>
						<Text style={{ ...styles.buttonText, fontFamily: "RobotoRegular" }}>Registration</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	regContainer: {
		width: "100%",
	},
	title: {
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		color: "#212121",
		marginBottom: 32,
	},
	form: {
		marginBottom: 16,
		paddingHorizontal: 10,
	},
	input: {
		backgroundColor: "#E8E8E8",
		borderRadius: 8,
		border: "1px solid #E8E8E8",
		height: 50,
		paddingLeft: 15,
		paddingRight: 15,
		fontSize: 16,
		lineHeight: 19,
	},
	inputBox: {
		marginBottom: 16,
	},
	button: {
		paddingHorizontal: 32,
		paddingVertical: 16,
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		alignItems: "center",
		marginTop: 43,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		lineHeight: 19,
	},
});
