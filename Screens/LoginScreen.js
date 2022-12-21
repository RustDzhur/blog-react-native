import { useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export const LoginScreen = ({setIsShowKeyboard}) => {
	const [changeEmail, setChangeEmail] = useState("");
	const [changePassword, setChangePassword] = useState("");

	const handleChangeValue = () => {
		alert('Email: ' + changeEmail + '\n' + 'Password: ' + changePassword);
	};

	return (
		<View style={styles.regContainer}>
			<Text style={styles.title}>Login</Text>
			<View style={styles.form}>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						textAlign={"left"}
						placeholder={"Email address"}
                        onFocus={() => setIsShowKeyboard(true)}
                        onChangeText={setChangeEmail}
					/>
				</View>
				<View>
					<TextInput
						style={styles.input}
						textAlign={"left"}
						placeholder={"Password"}
						secureTextEntry={true}
                        onFocus={() => setIsShowKeyboard(true)}
                        onChangeText={setChangePassword}
					/>
				</View>
				<TouchableOpacity activeOpacity={0.6} onPress={handleChangeValue}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Login</Text>
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
		fontWeight: "500",
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		letterSpacing: "0.01em",
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
        color: '#fff',
        fontSize: 16,
        lineHeight: 19,
    },
});
