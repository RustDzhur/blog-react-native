import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
	return (
		<View style={styles.regContainer}>
			<Text style={styles.title}>Registration</Text>
			<View style={styles.form}>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						textAlign={"left"}
						placeholder={"Name"}
					/>
				</View>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						textAlign={"left"}
						placeholder={"Email address"}
					/>
				</View>
				<View>
					<TextInput
						style={styles.input}
						textAlign={"left"}
						placeholder={"Password"}
						secureTextEntry={true}
					/>
				</View>
				<TouchableOpacity activeOpacity={0.6}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Registration</Text>
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
