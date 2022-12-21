import { useState } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { RegLogForm } from "./Screens/regLogForm";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	return (
		<View style={styles.container}>
			<ImageBackground source={require("./assets/bg.jpg")} style={styles.bg}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<TouchableWithoutFeedback onPress={() => (Keyboard.dismiss) (setIsShowKeyboard(false))}>
						<View style={{...styles.form, paddingBottom: isShowKeyboard ? 0 : 45}}>
							<RegLogForm setIsShowKeyboard={setIsShowKeyboard} isShowKeyboard={isShowKeyboard}/>
						</View>
					</TouchableWithoutFeedback>
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
		// paddingBottom: 45,
		paddingLeft: 16,
		paddingRight: 16,
		borderTopStartRadius: 25,
		borderTopEndRadius: 25,
	},
});
