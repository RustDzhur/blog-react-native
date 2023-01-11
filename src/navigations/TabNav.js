import { PostsScreen } from "../screens/mainScreens/PostsScreen";
import { CreatePostsScreen } from "../screens/mainScreens/CreatePostsScreen";
import { ProfileScreen } from "../screens/mainScreens/ProfileScreen";
import { CreateTabBtn, RemoveTabBtn } from "../components/CustomBtns";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { LogOut } from "../components/LogOutUser";


const Tab = createBottomTabNavigator();

export const TabNav = () => {
	const navigation = useNavigation("Posts");

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					elevation: 0,
					borderRadius: 15,
					backgroundColor: "#fff",
					...Platform.select({
						android: {
							height: 65,
							bottom: 0,
						},
						ios: {
							height: 83,
							bottom: 25,
						},
					}),
					...styles.shadow,
				},
			}}>
			<Tab.Screen
				options={{
					headerRight: () => (
						<TouchableOpacity onPress={LogOut}>
							<Image
								source={require("../../assets/images/logOut.png")}
								style={{
									width: 24,
									height: 24,
									marginRight: 16,
									tintColor: "black",
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Image
									source={require("../../assets/images/postsActive.png")}
									style={{ width: 40, height: 40, top: "20%" }}
								/>
							) : (
								<Image
									source={require("../../assets/images/posts.png")}
									style={{ width: 40, height: 40, top: "20%" }}
								/>
							)}
						</View>
					),
				}}
				name="Posts"
				component={PostsScreen}
			/>
			<Tab.Screen
				options={{
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.navigate("Posts")}>
							<Image
								source={require("../../assets/images/goBack.png")}
								style={{
									width: 24,
									height: 24,
									marginLeft: 16,
									tintColor: "black",
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<>
							{!focused ? (
								<CreateTabBtn onPress={() => navigation.navigate("Create")}>
									<View>
										<Image
											source={require("../../assets/images/create.png")}
											style={{
												top: 20,
												left: 20,
												width: 30,
												height: 30,
												tintColor: "#fff",
											}}
											resizeMode="contain"
										/>
									</View>
								</CreateTabBtn>
							) : (
								<RemoveTabBtn>
									<View>
										<Image
											source={require("../../assets/images/trash.png")}
											style={{
												top: 15,
												width: 70,
												height: 40,
											}}
											resizeMode="contain"
										/>
									</View>
								</RemoveTabBtn>
							)}
						</>
					),
				}}
				name="Create"
				component={CreatePostsScreen}
			/>
			<Tab.Screen
				options={{
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.navigate("Posts")}>
							<Image
								source={require("../../assets/images/goBack.png")}
								style={{
									width: 24,
									height: 24,
									marginLeft: 16,
									tintColor: "black",
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Image
									source={require("../../assets/images/profileActive.png")}
									style={{ width: 40, height: 40, top: "20%" }}
								/>
							) : (
								<Image
									source={require("../../assets/images/profile.png")}
									style={{ width: 40, height: 40, top: "20%" }}
								/>
							)}
						</View>
					),
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#7F5DF0",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
	createBtn: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: -50 }, { translateY: -50 }],
	},
});
