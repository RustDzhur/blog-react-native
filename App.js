import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LoginScreen } from "./Screens/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground source={require("./assets/bg.jpg")} style={styles.bg}>
				<LoginScreen/>
				<RegistrationScreen/>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "green",
		fontSize: 35,
		textAlign: "center",
	},
	bg: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
	},
});
