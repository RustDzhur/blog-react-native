import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react";
import { useFonts } from "expo-font";
import { Camera } from "expo-camera";
import 'react-native-get-random-values';
import * as Location from 'expo-location';

export const CreatePostsScreen = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [photo, setPhoto] = useState("");
	const [isCameraReady, setIsCameraReady] = useState(false);
	const [placeName, setPlaceName] = useState("");
	const [localization, setLocalization] = useState("");
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const cameraRef = useRef();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
		(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
	}, []);

	const onCameraReady = () => {
		setIsCameraReady(true);
	};

	const getPhoto = async () => {
		if (cameraRef.current) {
			const data = await cameraRef.current.takePictureAsync();
			setPhoto(data.uri);
		}
		let location = await Location.getCurrentPositionAsync({});
		setLocation(location);
	};

	const publishPhoto = () => {
		const post = {
			id: uuidv4(),
			photo,
			placeName,
			localization,
		};
		navigation.navigate("Posts", {screen: 'DefaultScreen', params: post});
	};

	if (hasPermission === false) {
		return <Text style={styles.text}>No access to camera</Text>;
	}

	const [loaded] = useFonts({
		RobotoRegular: require("../../../assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("../../../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!loaded) {
		return null;
	}

	const createNewPost = localization === "" || placeName === "" || photo === "";

  let localPosition = 'Waiting..';
  if (errorMsg) {
    localPosition = errorMsg;
  } else if (location) {
    localPosition = `${location.coords.latitude}, ${location.coords.longitude}`;
  }

	return (
		<ScrollView style={styles.container}>
			<Camera
				style={styles.camera}
				ref={cameraRef}
				onCameraReady={onCameraReady}>
				{photo && (
					<View style={styles.takeSnapShot}>
						<Image source={{ uri: photo }} style={{ height: 80, width: 80 }} />
					</View>
				)}
				<TouchableOpacity onPress={getPhoto}>
					<Image
						source={require("../../../assets/images/makesnap.png")}
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
					onChangeText={setPlaceName}
				/>
			</View>
			<View style={{ ...styles.inputWrapper, marginBottom: 32 }}>
				<TextInput
					style={{ ...styles.input, fontFamily: "RobotoRegular" }}
					textAlign={"left"}
					placeholder={"Locality"}
					placeholderTextColor="#BDBDBD"
					// onFocus={() => setIsShowKeyboard(true)}
					onChangeText={setLocalization}
					value={localPosition}
				/>
				<Image
					source={require("../../../assets/images/localization.png")}
					style={styles.localizationIcon}
				/>
			</View>
			<TouchableOpacity
				activeOpacity={0.6}
				disabled={createNewPost}
				onPress={publishPhoto}>
				<View style={createNewPost ? styles.button : styles.activeButton}>
					<Text
						style={
							createNewPost
								? { ...styles.buttonText, fontFamily: "RobotoRegular" }
								: { ...styles.activeButtonText, fontFamily: "RobotoRegular" }
						}>
						Publish
					</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		height: 343,
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
		marginHorizontal: 16,
		fontSize: 16,
		color: "#BDBDBD",
		marginBottom: 32,
	},
	inputWrapper: {
		marginHorizontal: 16,
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
		marginHorizontal: 16,
		backgroundColor: "#DEDEDE",
		borderRadius: 100,
		alignItems: "center",
	},
	activeButton: {
		marginHorizontal: 16,
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		alignItems: "center",
	},
	buttonText: {
		paddingVertical: 16,
		fontSize: 16,
		color: "#BDBDBD",
	},
	activeButtonText: {
		paddingVertical: 16,
		fontSize: 16,
		color: "#fff",
	},
	takeSnapShot: {
		position: "absolute",
		top: 0,
		left: 0,
		borderColor: "white",
	},
});
