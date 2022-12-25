import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./Screens/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
export default function App() {
	const AuthStack = createNativeStackNavigator();
	return (
		<NavigationContainer>
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
		</NavigationContainer>
	);
}
