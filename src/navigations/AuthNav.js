import { LoginScreen } from "../Screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
const AuthStack = createNativeStackNavigator();

export const AuthNav = () => {
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
			<AuthStack.Screen
				options={{ headerShown: true }}
				name="Create"
				component={CreatePostsScreen}
			/>
		</AuthStack.Navigator>
	);
};
