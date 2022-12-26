import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import SvgUri from "react-native-svg-uri";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { PostScreen } from "../Screens/PostsScreen";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";

import Posts from "../assets/images/create.svg"

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const useAuth = isAuth => {
	if (!isAuth) {
		return (
			<AuthStack.Navigator>
				<AuthStack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<AuthStack.Screen
					options={{ headerShown: false }}
					name="Register"
					component={RegistrationScreen}
				/>
			</AuthStack.Navigator>
		);
	}
	return (
		<Tab.Navigator>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					tabBarButton: () => (
						<SvgUri source={require("../assets/images/posts.svg")} />
					),
				}}
				name="Posts"
				component={PostScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					tabBarButton: () => (
						<SvgUri source={require("../assets/images/create.svg")} />
					),
				}}
				name="Create"
				component={CreatePostsScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					tabBarButton: () => (
						<SvgUri source={require("../assets/images/profile.svg")} />
					),
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	);
};
