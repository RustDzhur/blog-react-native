import { PostScreen } from "../Screens/PostsScreen";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { CustomCreateTabBtn } from "../components/CustomeCreateTabBtn";
import { View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const TabNav = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 20,
					right: 20,
					elevation: 0,
					borderRadius: 15,
					backgroundColor: "#fff",
					height: 83,
					...styles.shadow,
				},
			}}>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Image
									source={require("../assets/images/postsActive.png")}
									style={{ width: 80, height: 80, top: "20%" }}
								/>
							) : (
								<Image
									source={require("../assets/images/posts.png")}
									style={{ width: 80, height: 80, top: "20%" }}
								/>
							)}
						</View>
					),
				}}
				name="Posts"
				component={PostScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require("../assets/images/create.png")}
								style={{
									width: 30,
									height: 30,
									tintColor: "#fff",
									transform: focused
										? [{ rotate: "45deg" }]
										: [{ rotate: "0deg" }],
								}}
								resizeMode="contain"
							/>
						</View>
					),
					tabBarButton: props => <CustomCreateTabBtn {...props} />,
				}}
				name="Create"
				component={CreatePostsScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Image
									source={require("../assets/images/profileActive.png")}
									style={{ width: 80, height: 80, top: "20%" }}
								/>
							) : (
								<Image
									source={require("../assets/images/profile.png")}
									style={{ width: 80, height: 80, top: "20%" }}
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
