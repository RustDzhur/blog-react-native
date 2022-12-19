import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import bg from './assets/bg.jpg'


export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/bg.jpg')} style={styles.bg}>
				<Text style={styles.text}>
					Open up App.js to start working on your app?
				</Text>
				<StatusBar style="auto" />
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
		resizeMode: 'cover',
		justifyContent: 'center',
		width: '100%',
	}
});
