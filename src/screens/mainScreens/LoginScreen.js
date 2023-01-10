import { useState } from "react";
import { useFonts } from "expo-font";
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from "react-native";
import { Background } from "../../components/Background";
import { signIn } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const LoginScreen = ({ navigation }) => {
	const [changeEmail, setChangeEmail] = useState("");
	const [changePassword, setChangePassword] = useState("");
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const dispatch = useDispatch();

	const [loaded] = useFonts({
		RobotoRegular: require("../../../assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("../../../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!loaded) {
		return null;
	}

	const handleChangeValue = () => {
		dispatch(signIn({ changeEmail, changePassword }));
		Keyboard.dismiss();
		setIsShowKeyboard(false);
		setChangeEmail('')
		setChangePassword('')
	};

	return (
		<Background
			setIsShowKeyboard={setIsShowKeyboard}
			isShowKeyboard={isShowKeyboard}>
			<View style={styles.regContainer}>
				<Text style={{ ...styles.title, fontFamily: "RobotoMedium" }}>
					Login
				</Text>
				<View style={styles.form}>
					<View style={styles.inputBox}>
						<TextInput
							style={{ ...styles.input, fontFamily: "RobotoRegular" }}
							textAlign={"left"}
							placeholder={"Email address"}
							onFocus={() => setIsShowKeyboard(true)}
							onChangeText={(value) => setChangeEmail(value)}
							value={changeEmail}
						/>
					</View>
					<View>
						<TextInput
							style={{ ...styles.input, fontFamily: "RobotoRegular" }}
							textAlign={"left"}
							placeholder={"Password"}
							secureTextEntry={true}
							onFocus={() => setIsShowKeyboard(true)}
							onChangeText={(value) => setChangePassword(value)}
							value={changePassword}
						/>
					</View>
					<TouchableOpacity activeOpacity={0.6} onPress={handleChangeValue}>
						<View style={styles.button}>
							<Text
								style={{ ...styles.buttonText, fontFamily: "RobotoRegular" }}>
								Login
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				{!isShowKeyboard && (
					<View style={styles.changeForm}>
						<Text
							style={{ ...styles.text, fontFamily: "RobotoRegular" }}
							onPress={() => navigation.navigate("Register")}>
							Don't have an account? Register
						</Text>
					</View>
				)}
			</View>
		</Background>
	);
};

const styles = StyleSheet.create({
	regContainer: {
		width: "100%",
	},
	title: {
		fontWeight: "500",
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
	changeForm: {
		alignItems: "center",
	},
	text: {
		fontSize: 16,
		lineHeight: 19,
		color: "#1B4371",
	},
});
