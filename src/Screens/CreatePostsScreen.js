import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { Camera, CameraType } from "expo-camera";

export const CreatePostsScreen = () => {
	const [snap, setSnap] = useState(null);
	const [hasPermission, setHasPermission] = useState(null);
	const [photo, setPhoto] = useState("");

	const getPhoto = async () => {
		const photo = await camera.takePictureAsync();
		setPhoto(camera.uri);
	};

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const [loaded] = useFonts({
		RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Camera style={styles.camera} ref={setSnap}>
				{photo && (
					<View style={styles.takeSnapShot}>
						<Image source={{ uri: photo }} style={{ height: 50, width: 50 }} />
					</View>
				)}
				<TouchableOpacity onPress={getPhoto}>
					<Image
						source={require("../../assets/images/makesnap.png")}
						style={styles.snapShot}
					/>
				</TouchableOpacity>
			</Camera>
			<Text style={styles.uploadBtn}>Upload Photo</Text>
			<View style={{ ...styles.inputWrapper, marginBottom: 16 }}>
				<TextInput
					style={{ ...styles.input, fontFamily: "RobotoRegular" }}
					textAlign={"left"}
					placeholder={"Place name..."}
					placeholderTextColor="#BDBDBD"
					// onFocus={() => setIsShowKeyboard(true)}
					// onChangeText={setChangeEmail}
				/>
			</View>
			<View style={{ ...styles.inputWrapper, marginBottom: 32 }}>
				<TextInput
					style={{ ...styles.input, fontFamily: "RobotoRegular" }}
					textAlign={"left"}
					placeholder={"Locality"}
					placeholderTextColor="#BDBDBD"
					// onFocus={() => setIsShowKeyboard(true)}
					// onChangeText={setChangeEmail}
				/>
				<Image
					source={require("../../assets/images/localization.png")}
					style={styles.localizationIcon}
				/>
			</View>
			<TouchableOpacity activeOpacity={0.6}>
				<View style={styles.button}>
					<Text style={{ ...styles.buttonText, fontFamily: "RobotoRegular" }}>
						Publish
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	camera: {
		height: 343,
		marginTop: 32,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#DEDEDE",
		borderRadius: 8,
		marginBottom: 8,
	},
	snapShot: {
		width: 60,
		height: 60,
	},
	uploadBtn: {
		fontSize: 16,
		color: "#BDBDBD",
		marginBottom: 32,
	},
	inputWrapper: {
		borderBottomColor: "#E8E8E8",
		borderBottomWidth: 1,
		flexDirection: "row-reverse",
		alignItems: "center",
	},
	input: {
		height: 30,
		fontSize: 16,
		flex: 1,
	},
	localizationIcon: {
		width: 24,
		height: 24,
	},
	button: {
		backgroundColor: "#DEDEDE",
		borderRadius: 100,
		alignItems: "center",
	},
	buttonText: {
		paddingVertical: 16,
		fontSize: 16,
		color: "#BDBDBD",
	},
	takeSnapShot: {
		position: "absolute",
		top: 0,
		left: 0,
		borderColor: "white",
	},
});
