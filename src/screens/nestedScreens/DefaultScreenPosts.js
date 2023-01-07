import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

export const DefaultScreenPosts = ({ route, navigation }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (route.params) {
			setPosts(prevState => [route.params, ...prevState]);
		}
	}, [route.params]);

	const [loaded] = useFonts({
		RobotoRegular: require("../../../assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("../../../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View style={styles.userContainer}>
				<Image
					source={require("../../../assets/images/user.png")}
					style={styles.userImage}
				/>
				<View>
					<Text style={{ ...styles.userNameText, fontFamily: "RobotoRegular" }}>
						Natali Romanova
					</Text>
					<Text
						style={{ ...styles.userEmailText, fontFamily: "RobotoRegular" }}>
						example@example.com
					</Text>
				</View>
			</View>
			<View>
				<FlatList
					data={posts}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<View>
							<View>
								<Image source={{ uri: item.photo }} style={styles.image} />
								<Text
									style={{ ...styles.placeName, fontFamily: "RobotoRegular" }}>
									{item.placeName}
								</Text>
							</View>

							<View style={styles.locationCommentContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Posts', {screen: 'CommentsScreen'})}>
              <View style={styles.commentContainer}>
									<Image
										source={require("../../../assets/images/comment.png")}
										style={styles.commentLogo}
									/>
									<Text style={styles.commentAmount}>0</Text>
								</View>
              </TouchableOpacity>

								<TouchableOpacity
									onPress={() =>
										navigation.navigate('Posts', { screen: "MapScreen" })
									}>
									<View style={styles.location}>
										<Image
											source={require("../../../assets/images/localization.png")}
											style={{ width: 24, height: 24, marginRight: 4 }}
										/>
										<Text
											style={{
												...styles.locationText,
												fontFamily: "RobotoRegular",
											}}>
											{item.localization}
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					)}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	userContainer: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		marginTop: 32,
		marginBottom: 32,
	},
	userImage: {
		width: 60,
		height: 60,
		marginRight: 8,
	},
	userNameText: {
		fontWeight: "700",
		fontSize: 13,
		color: "#212121",
	},
	userEmailText: {
		fontWeight: "400",
		fontSize: 11,
		color: "rgba(33, 33, 33, 0.8)",
	},
	placeName: {
		fontWeight: "500",
		fontSize: 16,
		color: "#212121",
	},
	image: {
		height: 240,
		borderRadius: 8,
		marginBottom: 8,
	},
	locationCommentContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginBottom: 8,
	},
	commentContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},

	commentLogo: {
		width: 24,
		height: 24,
		marginRight: 6,
	},
	commentAmount: {
		fontSize: 16,
		color: "#BDBDBD",
	},
	location: {
		flexDirection: "row",
		alignItems: "center",
	},
	locationText: {
		fontSize: 16,
		textDecorationLine: "underline",
		color: "#212121",
	},
});
