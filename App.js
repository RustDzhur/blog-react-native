import {
	StyleSheet,
	View,
	ImageBackground,
	KeyboardAvoidingView,
} from "react-native";
import { RegLogForm } from "./Screens/regLogForm";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground source={require("./assets/bg.jpg")} style={styles.bg}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<View style={styles.form}>
						<RegLogForm />
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		justifyContent: "flex-end",
	},
	form: {
		backgroundColor: "#fff",
		paddingTop: 92,
		paddingBottom: 45,
		paddingLeft: 16,
		paddingRight: 16,
		borderTopStartRadius: 25,
		borderTopEndRadius: 25,
	},
});
