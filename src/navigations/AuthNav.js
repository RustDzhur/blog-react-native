import { LoginScreen } from "../screens/mainScreens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "../screens/mainScreens/RegistrationScreen";

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
		</AuthStack.Navigator>
	);
};
